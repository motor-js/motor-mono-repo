import { useTable } from '@motor-js/engine'

function Table() {

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
  
  console.log('dataSet!', dataSet)

  return (
    <div>
      table
    </div>
  );
}

export default Table;
