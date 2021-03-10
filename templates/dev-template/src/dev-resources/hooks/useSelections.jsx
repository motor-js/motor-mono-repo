import { useState, useEffect, useRef, useContext, useCallback } from "react";
import { EngineContext } from "components/engine/Table/node_modules/@motor-js/engine";

let qDoc = null;
let qObject = null;

const useSelectionObject = () => {
  const { engine } = useContext(EngineContext) || {};

  const _isMounted = useRef(true);
  const [qLayout, setQLayout] = useState(null);
  const [selections, setSelections] = useState(null);

  const update = useCallback(async () => {
    const _qLayout = await qObject.getLayout();
    const sel = await getSelections(_qLayout);
    if (_isMounted.current) {
      setQLayout(_qLayout);
      setSelections(sel);
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
    // eslint-disable-next-line no-empty
    if (engine === undefined) {
    } else {
      (async () => {
        const qProp = {
          qInfo: { qType: "SelectionObject" },
          qSelectionObjectDef: {},
        };
        qDoc = await engine;
        qObject = await qDoc.createSessionObject(qProp);
        qObject.on("changed", () => {
          update();
        });
        update();
      })();
    }
  }, [engine, update]);

  useEffect(() => () => (_isMounted.current = false), []);

  return { qLayout, selections, clearSelections };
};

export default useSelectionObject;
