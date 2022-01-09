import { useSelections, useButton, useList } from '@motor-js/engine'

function App() {

  const { clearSelections } = useSelections()  
  const { lockField, unlockField } = useButton()

  const dimension = ['Row']

  const { 
    listData,
    motorListProps,
  } = useList({ dimension })

  console.log(motorListProps)

  return (
    <div className="App">
      <button onClick={() => lockField('Row')}>Lock</button>
      <button onClick={() => unlockField('Row')}>UnLock</button>
      <button onClick={ () => clearSelections()}>clearSelections</button>
      {/*<MotorFilter dimension={['Row']}/>*/}
    </div>
  );
}

export default App;
