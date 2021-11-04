import { useState } from 'react'
const enigma = require("enigma.js");
const schema = require("enigma.js/schemas/12.170.2.json");

const useConnect = ({ config }) => {

    const reloadURI = encodeURIComponent(`https://${config.host}/content/Default/${config.redirectFileName}`);
    const url = `wss:/${config.host}/app/engineData?reloadURI=${reloadURI}`;

    const [engineError] = useState(false);
    const [errorCode, seErrorCode] = useState(null);
    const [loginUri, setLoginUri] = useState(null)
    const [user, setUser] = useState(null)
    const [engine, setEngine] = useState(() => {
        (async () => {
            const session = enigma.create({
                schema,
                url: url,
                });

                session.on('notification:OnAuthenticationInformation', (authInfo) => {
                  if (authInfo.mustAuthenticate) {
                    console.warn("Not logged in");
                    setLoginUri(authInfo.loginUri)
                   // seErrorCode(-1);
                  //  return -1;
                   // window.location.href = authInfo.loginUri;
                  }
                });
                session.on("suspended", () => {
                    console.warn("Captured session suspended");
                });

                session.on("error", () => {
                    console.warn("Captured session error");
                });
                session.on("closed", () => {
                    console.warn("Session was closed");
                    seErrorCode(-1)
                    return -1
              });

              try {
                const _global = await session.open();
                const _user = await _global.getAuthenticatedUser()
                const _doc = await _global.openDoc(config.appId);
                setUser(_user)
                setEngine(_doc);
                seErrorCode(1);
                return 1
              } catch (err) {
                if (err.code) {
                  console.log('Tried to communicate on a session that is closed');
                }
              }
        })();
    }, [])

    return { engine, engineError, errorCode, loginUri, user }
}

export default useConnect