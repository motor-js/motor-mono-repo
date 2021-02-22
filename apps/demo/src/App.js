import { useContext } from 'react'
import { useList, EngineContext } from "@motor-js/engine"
import HC from './HC'
import List from './List'
import 'semantic-ui-css/semantic.min.css'

function App() {
  
  const { engine, engineError } = useContext(EngineContext);

  return (
    <div className="App">
      {engine && 
        <HC />
      }
      hi
    </div>
  );
}

export default App;
