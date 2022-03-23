import logo from './logo.svg';
import { useTable } from '@motor-js/engine'

function App() {

  const cols=[
    {
      qField: 'BURGER_TEST',
      dataKey: 'BURGER_TEST',
      qLabel: 'BURGER_TEST',
      qNullSuppression: false
    },
    {
      qField: '=sum(BURGER_VALUE)',
      dataKey: 'BURGER_VALUE',
      qLabel: 'BURGER_VALUE',
    }
  ];

  const { 
    dataSet,
  } = useTable({
    cols,
    qSuppressMissing: false,
    qSuppressZero: false
  });
  
  console.log(dataSet)

  return (
    <div className="App">
    </div>
  );
}

export default App;
