import { useContext } from 'react'
import { useList, EngineContext } from "@motor-js/engine"
import Child from './Child'

function App() {
  
  const { engine, engineError } = useContext(EngineContext);

  return (
    <div className="App">
      {engine && 
        <Child engine={engine}/>
      }
      hi
    </div>
  );
}

export default App;
