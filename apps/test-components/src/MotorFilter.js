import { useList } from '@motor-js/engine'
import { Filter } from "@motor-js/components"

const MotorFilter = ({ dimension}) => {

  const { 
    listData,
    motorListProps,
  } = useList({ dimension })
  
  console.log(listData)
  
  return (
    <>
        <Filter
          m={10}
          listData={listData}
          motorListProps={motorListProps}
          colorTheme="blue"
        />
    </>
  );
};

export default MotorFilter;
