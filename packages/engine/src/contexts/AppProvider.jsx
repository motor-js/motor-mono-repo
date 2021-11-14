import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { AppContext, EngineContext } from './AppContext'
import { deepMerge } from '../utils/object'

const AppProvider = ({ children, value, app }) => {

  const [appObj, setAppObj] = useState(null)
  const { global } = useContext(EngineContext)

  useEffect(() => {
    async function getApp() {
      const _doc = await global.openDoc(config.appId);
      setAppObj(_doc)
    }
    getApp()
  },[])

  return (
    <AppContext.Provider value={appObj}>
    {children}
    </AppContext.Provider>
  )

}

export default AppProvider