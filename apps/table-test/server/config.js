const https = require('https');
const fs = require('fs');

const xrfKey = 'abcdefghijklmnop';

module.exports = {
  // Your Sense Enterprise installation hostname
  //host: 'motor.westeurope.cloudapp.azure.com', //'sense-motor.adviseinc.co.uk', //sensedev.adviseinc.co.uk
  host: 'sense-motor.adviseinc.co.uk',
  // Listening port of the Qlik Sense Enterprise proxy
  proxyPort: 4243,
  // Name of virtualProxy to be used (begin with '/')
  virtualProxy: '/motor-ticket',
  // 'engineData' is a special "app id" that indicates you only want to use the global
  appId: '4359f6e1-0df6-43f8-bcd2-9aa13616f53b',
  //userDirectory: 'motor',
  //userId: 'luke',
 userDirectory: 'ADVINC',
 userId: 'Motor_User1',

  xrfKey: xrfKey,
  // URL to the QPS there the ticket is retrived
  ticketURL() { return `https://${this.host}:${this.proxyPort}/qps${this.virtualProxy}/ticket?xrfkey=${xrfKey}`; },
  // Body sent in the ticket request
  ticketReqBody() {
    return {
      UserDirectory: this.userDirectory,
      UserId: this.userId,
      Attributes: [],
      TargetId: '',
    };
  },
  // Config used for the ticket request
  ticketReqConfig: {
    headers: {
      'Content-Type': 'application/json',
      'X-Qlik-Xrfkey': xrfKey,
    },
    httpsAgent: new https.Agent({
      ca: [fs.readFileSync('../certs_sensemotor/root.pem')],
      key: fs.readFileSync('../certs_sensemotor/client_key.pem'),
      cert: fs.readFileSync('../certs_sensemotor/client.pem'),
      rejectUnauthorized: false,
      //passphrase: 'AincMot0r1'
    }),
  },
};
