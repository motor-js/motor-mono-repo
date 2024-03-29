import { useContext, useCallback, useEffect, useRef, useState } from "react";
import { EngineContext } from "../contexts/EngineProvider";
import { AppContext } from "../contexts/AppContext";

const useBookmark = (props) => {
   
  const { engine } = useContext( AppContext._currentValue !== undefined ? AppContext : EngineContext) || {};

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

  const getBookmarkLayout = async (qId) => {
    const bookmark = await qObject.current.getBookmark({
      qId,
    });

    return await bookmark.getLayout();
  };

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

  const updateBookmark = async (qId, qTitle, qDescription) => {
    const bookmark = await getBookmark(qId);

    await bookmark.setProperties({
      qProp: {
        qInfo: {
          qId,
          qType: "bookmark",
        },
        qMetaDef: {
          title: qTitle,
          description: qDescription,
        },
      },
    });

    updateBookmarks();
  };

  const updateBookmarks = async () => {
    const bookmarks = await getBookmarks();

    const bookmarkList = bookmarks.map((d, i) => {
      return {
        id: d.qInfo.qId,
        title: d.qMeta.title,
        description: d.qMeta.description,
        modifiedDate: d.qData.qBookmark.qUtcModifyTime,
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

  const createBookmark = async (qTitle, qDescription, qId = null) => {
    const bookmarkCreated = await qObject.current.createBookmark({
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

  const update = useCallback(async () => {
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
          update();
        });
        update();
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
    getBookmark,
    getBookmarkLayout,
    updateBookmark,
    error,
  };
};

export default useBookmark;
