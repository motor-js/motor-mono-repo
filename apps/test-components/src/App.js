import { useSelections, useButton, useTable } from '@motor-js/engine'
import MotorFilter from './components/MotorFilter';
import { qlikSAASConfig, qlikAppProxy } from './config'

function App() {

  const { clearSelections } = useSelections()  
  const { lockField, unlockField } = useButton()

  const cols = [{
      qField: 'Row1',
      qLabel: 'Row Label'
  }]

  const {
    exportData,
  } = useTable({
    cols,
    config: qlikAppProxy,
    qPage: {
      qTop: 0,
      qLeft: 0,
      qWidth: 10,
      qHeight: 10,
    },
  });

  return (
    <div className="App">
      <button onClick={() => lockField('Row')}>Lock</button>
      <button onClick={() => unlockField('Row')}>UnLock</button>
      <button onClick={ () => clearSelections()}>clearSelections</button>
      <button onClick={ () => exportData()}>EXPORT DATA</button>
      <MotorFilter dimension={['Row1']}/>
      <MotorFilter dimension={['Row2']}/>
      <MotorFilter dimension={['Row3']}/>
    </div>
  );
}

export default App;
