

import App from "./App";
import { useList } from '@motor-js/engine'
import { useContext, useState } from "react";
//import { NebulaConnection } from '@motor-js/nebula'
import { Filter } from "@motor-js/components"
import { ThemeContext } from "@motor-js/theme";

const NewApp = ({ dimension}) => {

  const { listData, motorListProps } = useList({ dimension })
  
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
