import { useState, useEffect, useRef, useContext } from "react";
import { EngineContext } from "components/MotorTable/node_modules/@motor-js/engine";

let qDoc = null;
let qObject = null;

const useSelectionObject = () => {
  const { engine, engineError } = useContext(EngineContext) || {};

  const _isMounted = useRef(true);
  const [qLayout, setQLayout] = useState(null);
  // const { qLayout } = state
  // const [qLayout, setQLayout] = useState(null)

  const update = async () => {
    const _qLayout = await qObject.getLayout();
    const _Selections = await getSelections(_qLayout);
    if (_isMounted.current) {
      setQLayout(_qLayout);
    }
  };

  const getSelections = (v) => {
    const selections = v.qSelectionObject.qSelections;

    if (selections.length > 0) {
      // console.log(selections)
    }
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

  return { qLayout, clearSelections };
};

export default useSelectionObject;
