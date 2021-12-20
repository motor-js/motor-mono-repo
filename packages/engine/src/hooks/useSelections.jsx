import { useState, useEffect, useRef, useContext, useCallback } from "react";
import { EngineContext } from "../contexts/EngineProvider";
import { AppContext } from "../contexts/AppContext";
import { getFieldsFromDimensions } from "../utils/hyperCubeUtilities";

let qDoc = null;

const useSelectionObject = () => {

  const { engine } = useContext( AppContext._currentValue !== undefined ? AppContext : EngineContext) || {};

  const qObject = useRef(null);
  const [qLayout, setQLayout] = useState(null);
  const [selections, setSelections] = useState(null);
  const [selectionItems, setSelectionItems] = useState(null);

  const update = useCallback(async () => {
    const _qLayout = await qObject.current.getLayout();
    const sel = await getSelections(_qLayout);
    if (qObject.current) {
      setQLayout(_qLayout);
      setSelections(sel);
      /*
      //Old logic
      setSelectionItems(
        sel.map((element, index) => {
          return {
            qField: element.qField,
            qItems: element.qSelected.split(", "),
          };
        })
      );
      */
      setSelectionItems(
        sel.map((element, index) => {
          let items = []
          element.qSelectedFieldSelectionInfo.map((e) => items.push(e.qName))  
          return ({
            qField: element.qField,
            qItems: items,
          })
        })
      )
    }
  }, []);

  const getSelections = (v) => {
    const selections = v.qSelectionObject.qSelections;
    return selections;
  };

  const clearSelections = async (dim, value) => {
    (async () => {
      const qDoc = await engine;
      if (dim) {
        console.log(dim)
        const masterItem = await getFieldsFromDimensions(qDoc, dim)
        let field
        if(masterItem.length > 0) {
          field = masterItem[0].qData.info[0].qName
        } else {
          field = dim
        }
        const qField = await qDoc.getField(field)
        if (value) {
          await qField.toggleSelect(value);
        } else {
          await qField.clear();
        }
      } else {
        qDoc.clearAll();
      }
    })()
  };

  useEffect(() => {
    if (!engine) return;
    if (qObject.current) return;

    (async () => {
      const qProp = {
        qInfo: { qType: "SelectionObject" },
        qSelectionObjectDef: {},
      };
      const qDoc = await engine;

      try {
        qObject.current = await qDoc.createSessionObject(qProp);

        qObject.current.on("changed", () => {
          update();
        });
        update();
      } catch (err) {
        if (err.code === -2) {
          setError("SelectionObject error ");
        } else {
          setError(err);
        }
      }
    })();
  }, [engine]);

  return { qLayout, selections, selectionItems, clearSelections };
};

export default useSelectionObject;
