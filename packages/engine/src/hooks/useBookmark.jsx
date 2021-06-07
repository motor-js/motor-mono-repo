import { useContext, useCallback, useEffect, useRef, useState } from "react";
import { EngineContext } from "../contexts/EngineProvider";
import { deepMerge } from "../utils/object";

// const initialProps = {
//   qId: null,
// };

const useBookmark = (props) => {
  // const { qId } = deepMerge(initialProps, props);

  const { engine, engineError } = useContext(EngineContext) || {};
  const [qLayout, setQLayout] = useState(null);
  const [bookmarks, setBookmarks] = useState(null);
  const [qProperties, setQProperties] = useState(null);
  const [error, setError] = useState(null);

  const qObject = useRef(null);

  const getLayout = useCallback(() => qObject.current.getLayout(), []);
  const getProperties = useCallback(() => qObject.current.getProperties(), []);
  const getBookmarks = useCallback(() =>
    qObject.current.getBookmarks({
      qOptions: {
        qTypes: ["bookmark"],
        qData: {},
      },
    })
  );

  const update = useCallback(async (qObj) => {
    // setBookmarks(qObject.current);
    setBookmarks(await getBookmarks());
    // const _qLayout = await getLayout();
    // _qLayout.value = §§
    //   _qLayout.qNum === "number" ? _qLayout.qNum : _qLayout.qText;
    // setQLayout(_qLayout);
  }, []);

  useEffect(() => {
    if (!engine) return;

    (async () => {
      const qDoc = await engine;

      try {
        qObject.current = qDoc;
        // const qBookmarks = await qDoc.getBookmarks({
        //   qOptions: {
        //     qTypes: ["bookmark"],
        //     qData: {},
        //   },
        // });

        // setBookmarks(qBookmarks);

        // qObject.current = qBookmarks;

        // qObject.current.on("changed", () => {
        //   update(qObject.current);
        // });
        update(qObject.current);
      } catch (err) {
        console.log("error", err);
        if (err.code === -2) {
          setError("Variable Not Found");
        } else {
          setError(err);
        }
      }
    })();
  }, [engine]);

  return {
    bookmarks,
    // qLayout,
    // ...qLayout,
    // qProperties,
    // setProperties,
    // error,
  };
};

export default useBookmark;
