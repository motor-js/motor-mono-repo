

import { useList } from '@motor-js/engine'
import { Filter } from "@motor-js/components"

const MotorFilter = ({ dimension}) => {

  const { 
    listData,
    motorListProps,
  } = useList({ dimension })
  
  return (
    <>
        <Filter 
          listData={listData}
          motorListProps={motorListProps}
          colorTheme="orange"
        />
    </>
  );
};

export default MotorFilter;