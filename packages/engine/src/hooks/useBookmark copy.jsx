import { useContext, useCallback, useEffect, useRef, useState } from "react";
import { EngineContext } from "../contexts/EngineProvider";
import { deepMerge } from "../utils/object";

// const initialProps = {
//   qId: null,
// };

const useBookmark = (props) => {
  // const { qId } = deepMerge(initialProps, props);

  const { engine, engineError } = useContext(EngineContext) || {};
  const [bookmarks, setBookmarks] = useState(null);
  const [error, setError] = useState(null);

  const qObject = useRef(null);

  const getBookmark = useCallback(
    (qId) =>
      qObject.current.getBookmark({
        qId: qId,
      }),
    []
  );

  const applyBookmark = async (qId) => {
    const bookmarkApplied =
      qObject.current &&
      qObject.current.applyBookmark({
        qId,
      });
    if (bookmarkApplied) {
      const appliedBookmark = await getBookmark(qId);
      const bookmarkInfo = await appliedBookmark.getLayout();
      console.log(bookmarkInfo);

      // setBookmarks({ ...bookmarks, appliedBookmark, bookmarkInfo });
    }
  };

  const destroyBookmark = useCallback(
    (qId) =>
      qObject.current.destroyBookmark({
        qId: qId,
      }),
    []
  );

  const createBookmark = useCallback(
    (qId, qTitle, qDescription) =>
      qObject.current.createBookmark({
        qProp: {
          qInfo: {
            qId: qId,
            qType: "bookmark",
          },
          qMetaDef: {
            title: qTitle || "Unnamed bookmark",
            description: qDescription,
          },
        },
      }),
    []
  );

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
    console.log("update");

    const bookmarks = await getBookmarks();
    const bookmarkList = bookmarks.map((d, i) => {
      return { key: d.qInfo.qId, value: d.qInfo.qId, text: d.qMeta.title };
    });
    setBookmarks({ bookmarks, bookmarkList });
    // const _qLayout = await getLayout();
    // _qLayout.value = §§
    //   _qLayout.qNum === "number" ? _qLayout.qNum : _qLayout.qText;
    // setQLayout(_qLayout);
  }, []);

  useEffect(() => {
    if (!engine) return;
    if (qObject.current) return;

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

        qObject.current.on("changed", () => {
          update(qObject.current);
        });
        update(qObject.current);
      } catch (err) {
        if (err.code === -2) {
          setError("Bookmark Not Found");
        } else {
          setError(err);
        }
      }
    })();
  }, [engine]);

  return {
    ...bookmarks,
    applyBookmark,
    createBookmark,
    destroyBookmark,
    // qLayout,
    // ...qLayout,
    // qProperties,
    // setProperties,
    error,
  };
};

export default useBookmark;
