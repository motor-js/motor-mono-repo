

import App from "./App";
import { useList, useSearch, EngineContext } from '@motor-js/engine'
import { useContext, useState } from "react";
//import { NebulaConnection } from '@motor-js/nebula'

const NewApp = () => {

  const dimension = ['RESTAURANT']
  const { listData } = useList({ dimension })

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
    </>
  );
};

export default NewApp;
