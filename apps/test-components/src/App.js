import { useSelections, useButton } from '@motor-js/engine'
import MaterialTable from './MaterialTable';
import MotorFilter from './components/MotorFilter';

function App() {

  const { clearSelections } = useSelections()  
  const { lockField, unlockField } = useButton()

  return (
    <div className="App">
      <button onClick={() => lockField('Row')}>Lock</button>
      <button onClick={() => unlockField('Row')}>UnLock</button>
      <button onClick={ () => clearSelections()}>clearSelections</button>
      <MotorFilter dimension={['Row1']}/>
      <MotorFilter dimension={['Row2']}/>
      <MotorFilter dimension={['Row3']}/>
    </div>
  );
}

export default App;
