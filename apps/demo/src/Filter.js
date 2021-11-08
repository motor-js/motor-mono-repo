

import App from "./App";
import { useList, useSearch, EngineContext } from '@motor-js/engine'
import { useContext, useState } from "react";
//import { NebulaConnection } from '@motor-js/nebula'
import { Filter } from "@motor-js/components"

const NewApp = ({ dimension}) => {

  const { listData, motorListProps } = useList({ dimension })

  console.log(listData)
  
  return (
    <>
        <Filter 
          listData={listData}
          size="small"
          motorListProps={motorListProps}
          colorTheme="orange"
          />
    </>
  );
};

export default NewApp;
