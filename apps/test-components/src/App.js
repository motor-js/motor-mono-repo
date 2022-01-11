import logo from './logo.svg';
import './App.css';
import MotorFilter from './MotorFilter';
import { useSelections, useButton } from '@motor-js/engine'

function App() {

  const { clearSelections } = useSelections()  
  const { lockField, unlockField } = useButton()

  return (
    <div className="App">
      <button onClick={() => lockField('Row')}>Lock</button>
      <button onClick={() => unlockField('Row')}>UnLock</button>
      <button onClick={ () => clearSelections()}>clearSelections</button>
      <MotorFilter dimension={['Row']}/>
      {/*       <MotorFilter dimension={['Row1']}/>
      <MotorFilter dimension={['Row2']}/>
      <MotorFilter dimension={['Row3']}/>
      <MotorFilter dimension={['Row4']}/>
      <MotorFilter dimension={['Row5']}/>
      <MotorFilter dimension={['Row6']}/>
      <MotorFilter dimension={['Row7']}/>
      <MotorFilter dimension={['Row8']}/>
      <MotorFilter dimension={['Row9']}/>
*/}

    </div>
  );
}

export default App;
