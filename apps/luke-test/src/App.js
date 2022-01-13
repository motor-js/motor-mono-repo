import { useSelections, useButton, useList } from '@motor-js/engine'
import MotorFilter from './MotorFilter'

function App() {

  const { clearSelections, selections, lockAll, unlockAll } = useSelections()  
  const { lockField, unlockField } = useButton()

  const dimension = ['Row']

  const { 
    listData,
    motorListProps,
  } = useList({ dimension })


  return (
    <div className="App">
      <button onClick={() => lockField('Row')}>Lock</button>
      <button onClick={() => unlockField('Row')}>UnLock</button>
      <button onClick={() => lockAll()}>Lock All </button>
      <button onClick={() => unlockAll()}>UnLock All</button>
      <button onClick={ () => clearSelections()}>clearSelections</button>
      <MotorFilter dimension={['Row']}/>
      <MotorFilter dimension={['RowTest']}/>
    </div>
  );
}

export default App;
