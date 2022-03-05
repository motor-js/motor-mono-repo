import { useList } from "@motor-js/engine"
import MotorFilter from "./components/MotorFilter"

function App() {

  const dimension = ['Row1']

  const { listData, select} = useList({ dimension })

  console.log(listData)

  return (
    <div className="App">
      <button onClick={() => select([0],true)}>SELECT</button>
      <MotorFilter dimension={['Row2']}/>
      <MotorFilter dimension={['Row_2']}/>

    </div>
  );
}

export default App;
