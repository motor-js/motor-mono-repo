import { useState, useEffect, useCallback, useRef, useContext } from "react";
import { EngineContext } from "components/engine/Table/node_modules/@motor-js/engine";

const useSearch = ({ searchValue, dimensions, qCount, qGroupItemCount }) => {
  const [searchResults, setSearchResults] = useState();
  const _isMounted = useRef(true);

  const { engine, engineError } = useContext(EngineContext) || {};

  useEffect(() => {
    if (engine === undefined) {
    } else {
      (async () => {
        try {
          const qDoc = await engine;
          const search = await qDoc.searchResults(
            {
              qSearchFields: dimensions,
            },
            [searchValue],
            {
              qOffset: 0,
              qCount,
              qGroupItemOptions: [
                {
                  qGroupItemType: "FIELD",
                  qOffset: 0,
                  qCount: qGroupItemCount,
                },
              ],
            }
          );
          const res = await search;
          if (_isMounted.current) {
            setSearchResults(res);
          }
        } catch (e) {
          console.warn(e);
        }
      })();
    }
  }, [engine, searchValue, qCount, qGroupItemCount]);

  useEffect(() => () => (_isMounted.current = false), []);

  const select = useCallback((id) =>
    (async () => {
      const qDoc = await engine;
      // eslint-disable-next-line no-unused-expressions
      qDoc.selectAssociations(
        {
          qSearchFields: dimensions,
        },
        [searchValue],
        id
      ),
        [];
    })()
  );

  return {
    searchResults,
    select,
  };
};

export default useSearch;
