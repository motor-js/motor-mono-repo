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

      setBookmarks({ ...bookmarks, appliedBookmark, bookmarkInfo });
    }
  };

  const updateBookmarks = async () => {
    const bookmarks = await getBookmarks();

    const bookmarkList = bookmarks.map((d, i) => {
      return {
        id: d.qInfo.qId,
        title: d.qMeta.title,
        createdDate: d.qMeta.createdDate,
        modifiedDate: d.qMeta.modifiedDate,
      };
    });
    setBookmarks({ bookmarks, bookmarkList });
  };

  const destroyBookmark = async (qId) => {
    const bookmarkDestroyed = await qObject.current.destroyBookmark({
      qId,
    });

    updateBookmarks();
    return bookmarkDestroyed;
  };

  const createBookmark = async (qId, qTitle, qDescription) => {
    // const qDoc = await engine;
    const bookmarkCreated = await qObject.current.createBookmark({
      qProp: {
        qInfo: {
          qId: qId,
          qType: "bookmark",
        },
        qMetaDef: {
          title: qTitle || "Unnamed bookmark",
          description: qDescription,
          createdDate: new Date(Date.now()),
          modifiedDate: new Date(Date.now()),
        },
      },
    });
    const newBookmark = await bookmarkCreated.getLayout();

    updateBookmarks();
    return newBookmark;
  };

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

    updateBookmarks();
  }, []);

  useEffect(() => {
    if (!engine) return;
    if (qObject.current) return;

    (async () => {
      const qDoc = await engine;

      try {
        qObject.current = qDoc;

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
