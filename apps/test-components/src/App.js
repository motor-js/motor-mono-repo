import { useSelections, useButton } from '@motor-js/engine'
import MotorFilter from './components/MotorFilter';
import { qlikSAASConfig, qlikAppProxy } from './config'

function App() {

  const { clearSelections } = useSelections()  
  const { lockField, unlockField, selectValues } = useButton()

  const select = () => selectValues(['Produce', 'Deli'],'Product Group') 

  return (
    <div className="App">
      <button onClick={() => lockField('Row')}>Lock</button>
      <button onClick={() => unlockField('Row')}>UnLock</button>
      <button onClick={() => clearSelections()}>clearSelections</button>
      <button onClick={() => select()}>SELECT</button>
    </div>
  );

}

export default App;
