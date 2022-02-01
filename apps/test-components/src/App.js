import { useSelections, useButton } from '@motor-js/engine'
import MaterialTable from './MaterialTable';
function App() {

  const { clearSelections } = useSelections()  
  const { lockField, unlockField } = useButton()

  return (
    <div className="App">
      <button onClick={() => lockField('Row')}>Lock</button>
      <button onClick={() => unlockField('Row')}>UnLock</button>
      <button onClick={ () => clearSelections()}>clearSelections</button>
      <MaterialTable />
    </div>
  );
}

export default App;
