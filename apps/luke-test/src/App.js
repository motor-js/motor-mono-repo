import { useSelections, useButton, useList } from '@motor-js/engine'
import MotorFilter from './MotorFilter'

function App() {

  const { clearSelections, selections } = useSelections()  
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
      <button onClick={ () => clearSelections()}>clearSelections</button>
      <MotorFilter dimension={['Row']}/>
    </div>
  );
}

export default App;
