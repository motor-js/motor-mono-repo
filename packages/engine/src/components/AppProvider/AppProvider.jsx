import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../contexts/AppContext'
import { EngineContext } from "../../contexts/EngineProvider";

const AppProvider = ({ children, app }) => {

  const [appObj, setAppObj] = useState({engine: null })
  const { engine } = useContext(EngineContext)
  console.log(appObj)

  useEffect(() => {
    async function getApp() {
      const _doc = engine && await engine.openDoc(app);
      setAppObj({engine: _doc})
    }
    getApp()
  },[engine])

  return (
    <AppContext.Provider value={appObj}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider