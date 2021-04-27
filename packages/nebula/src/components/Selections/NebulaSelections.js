
import React, { useEffect, useContext, useRef } from 'react';
import { NebulaContext } from '../../contexts/NebulaProvider'

const NebulaSelections = ({ styles }) => {
  
  const selectionsRef = useRef(null);

  const nebula = useContext(NebulaContext)

  const update = async () => {
    const selections = await nebula.selections();
    selections.mount(selectionsRef.current);

  };

  useEffect(() => {
    if (nebula) update();
  }, [nebula]);

  return (
    <div className="container">
        <div ref={selectionsRef} style={styles} />
    </div>
  );
};

export default NebulaSelections;
