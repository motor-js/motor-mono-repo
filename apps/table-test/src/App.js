import logo from './logo.svg';
import { useTable } from '@motor-js/engine'

function App() {

  const cols=[
    {
      qField: 'BURGER_TEST',
      dataKey: 'BURGER_TEST',
      qLabel: 'BURGER_TEST'
    },
    {
      qField: '=1',
      dataKey: '1',
      qLabel: '1'
    }
  ];

  const { 
    dataSet,
  } = useTable({
    cols
  });
  
  console.log(dataSet)

  return (
    <div className="App">
    </div>
  );
}

export default App;
