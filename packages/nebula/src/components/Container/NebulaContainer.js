
import React, { useEffect, useContext, useRef } from 'react';
import { NebulaContext } from '../../contexts/NebulaProvider'

const NebulaContainer = ({ render, styles }) => {
  //const selectionsRef = useRef(null);
  const chartRef = useRef(null);
 
  const nebula = useContext(NebulaContext)
  
  const { id, type, fields, properties, showTitles, title, subTitle, footnote } = render

  const update = async () => {

    nebula.render({
      element: chartRef.current,    
      id,       
      type,
      fields,
      properties,
      showTitles,
      title,
      subTitle,
      footnote
    });
  };

  useEffect(() => {
    if (nebula) update();
  }, [nebula]); // eslint-disable-line

  return (
    <div className="container">
        <div ref={chartRef} style={styles} />
    </div>
  );
};

export default NebulaContainer;