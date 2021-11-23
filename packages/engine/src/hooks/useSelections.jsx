import { useState, useEffect, useRef, useContext, useCallback } from "react";
import { EngineContext } from "../contexts/EngineProvider";
import { AppContext } from "../contexts/AppContext";
import { ConfigContext } from "../contexts/ConfigProvider";

let qDoc = null;
let qObject = null;

const useSelectionObject = () => {

  const config = useContext(ConfigContext)
  const { engine } = useContext( config.global ? AppContext : EngineContext) || {};

  const qObject = useRef(null);
  const [qLayout, setQLayout] = useState(null);
  const [selections, setSelections] = useState(null);
  const [selectionItems, setSelectionItems] = useState(null);
  const [error, setError] = useState(null);

  const update = useCallback(async () => {
    const _qLayout = await qObject.current.getLayout();
    const sel = await getSelections(_qLayout);
    if (qObject.current) {
      setQLayout(_qLayout);
      setSelections(sel);
      setSelectionItems(
        sel.map((element, index) => {
          return {
            qField: element.qField,
            qItems: element.qSelected.split(", "),
          };
        })
      );
    }
  }, []);

  const getSelections = (v) => {
    const selections = v.qSelectionObject.qSelections;
    return selections;
  };

  const clearSelections = async (field, value) => {
    if (field) {
      const qField = await qDoc.getField(field);
      if (value) {
        await qField.toggleSelect(value);
      } else {
        await qField.clear();
      }
    } else {
      qDoc.clearAll();
    }
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
