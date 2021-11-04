

import App from "./App";
import { useList, useSearch, EngineContext } from '@motor-js/engine'
import { useContext, useState } from "react";
//import { NebulaConnection } from '@motor-js/nebula'
import { Filter } from "@motor-js/components"

const NewApp = () => {

  const dimension = ['BURGER']
  const { listData, motorListProps } = useList({ dimension })

  const [options, setOptions] = useState([])
  const [searchValue, setSearchValue] = useState("1");

  const qCount = 100;
  const qGroupItemCount = 100;

  const { 
    flatResults,
    flatSelect,
  } = useSearch({ 
    searchValue,
    qCount,
    qGroupItemCount
  })

  const handleSelect = (dim, val) => {
    flatSelect(dim,val)
  };

  return (
    <>
      {/* { engine &&  */}
       <button onClick={() => handleSelect('Restaurant','Burger King')}>change page</button>
       <div style={{

       }}>
        <Filter 
          listData={listData}
          size="small"
          motorListProps={motorListProps}
        />
        <Filter 
          listData={listData}
          motorListProps={motorListProps}
        />
        <Filter 
          listData={listData}
          motorListProps={motorListProps}
        />
        </div>
    </>
  );
};

export default NewApp;
