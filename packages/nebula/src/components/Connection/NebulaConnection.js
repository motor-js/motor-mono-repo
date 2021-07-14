import React, { useState, useEffect, useContext } from 'react'
import { EngineContext } from '@motor-js/engine'
import embed from '../../configure'
import { NebulaContext } from '../../contexts/NebulaProvider'

const NebulaConnection = ({ children }) => {
  
  const [nebula, setNebula] = useState(null);
  const { engine }  = useContext(EngineContext) || {};

  const init = async () => {
    const _nebula = await nebulaPromise();
    setNebula(_nebula);
  };

  useEffect(() => {
    init();
  },[engine])

  const nebulaPromise = async () => {
    if(engine) {
      const app = await engine
    return embed(app);
    }
  };

  return (
    <NebulaContext.Provider value={nebula}>
      {children}
    </NebulaContext.Provider>
  )

}

export default NebulaConnection