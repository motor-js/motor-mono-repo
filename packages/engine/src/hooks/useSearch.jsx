import { useState, useEffect, useCallback, useRef, useContext } from "react";
import { getFieldsFromDimensions } from "../utils/hyperCubeUtilities";
import { EngineContext } from "../contexts/EngineProvider";
import { AppContext } from "../contexts/AppContext";
import { ConfigContext } from "../contexts/ConfigProvider";

const useSearch = ({ searchValue, dimensions, qCount, qGroupItemCount }) => {
  
  const [groupResults, setGroupResults] = useState([]);
  const [flatResults, setFlatResults] = useState([]);
  const _isMounted = useRef(true);
  
  const config = useContext(ConfigContext)
  const { engine } = useContext( config.global ? AppContext : EngineContext) || {};

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
          const _groupRes = await groupRes(res)
          const _flattenRes = await flattenRes(_groupRes)
          setGroupResults(_groupRes);
          setFlatResults(_flattenRes);
          if (_isMounted.current) {
            setGroupResults(_groupRes);
            setFlatResults(_flattenRes);
          }
        } catch (e) {
          console.warn(e);
        }
      })();
    }
  }, [engine, searchValue, qCount, qGroupItemCount, dimensions]);

  useEffect(() => () => (_isMounted.current = false), []);

  const groupRes = v => {
    let arr = []
    let series = {};
    v.qSearchGroupArray.map(d => {
      series['id'] = d.qId
      series['dimension'] = d.qItems[0].qIdentifier
      series['value'] =  d.qItems[0].qItemMatches
      arr.push(series)
      series = {};
    })
    return arr
  }

  const flattenRes = v => {
    const arr = [];
    let series = {}
    v.map(d => {
      d.value.map(item => {
        series['dimension'] = d.dimension
        series['value'] = item.qText
        arr.push(series)
        series = {};
      })
    })
    return arr

  }

  const groupSelect = useCallback((id) =>
    (async () => {
      const qDoc = await engine;
      // eslint-disable-next-line no-unused-expressions
      qDoc.selectAssociations(
        {
          qSearchFields: dimensions,
          qContext: 'CurrentSelections'
        },
        [searchValue],
        id
        ),
      [];
    })()
  );

  const flatSelect = useCallback((dim, value) =>
    (async () => {
      const qDoc = await engine;
      // If the dimension is a master item, we are using this helper function
      // to identify the field in the data model
      const masterItem = await getFieldsFromDimensions(qDoc, dim)
      let field 
      if(masterItem.length > 0) {
        field = masterItem[0].qData.info[0].qName
      } else {
        field = dim
      }
      // eslint-disable-next-line no-unused-expressions
      const qField = await qDoc.getField(field)
      qField.select(value)
    })()
  );

  return {
    groupResults,
    flatResults,
    flatSelect,
    groupSelect,
  };
};

export default useSearch;
