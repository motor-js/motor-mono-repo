import React from 'react'
import { useList, useHyperCube } from "@motor-js/engine"

const Child = ({ engine }) => {

  //console.log(engine)
  const qPage = {
    qTop: 0,
    qLeft: 0,
    qWidth: 3,
    qHeight: 3000,
  };

  const dimension = ['country']
  const label = 'Country'
  //const cols = ['country', '=sum(points)']

  const cols= [
    { 
      qLibraryId: "mMvekw",
      qType: "dimension",
      qField: ''
      //qField: "[country]",
     // qLabel: "county" 
    },
    {
     qField: "=sum(points)",
      qLabel: "Points" 
    },
    {
      qField: "=min(points)",
       qLabel: "Points" 
     }
  ] 

  const {
    qLayout,
    qData,
    endSelections,
    beginSelections,
    changePage,
    selections,
    select,
    applyPatches,
  } = useHyperCube({
    cols,
    //qColumnOrder: columnOrder,
    //qCalcCondition: calcCondition,
    qPage,
    //qInterColumnSortOrder: columnSortOrder,
    // qSupressMissing: true,
    // qSuppressZero: true,
  });

  console.log('DATA: ',qData)

  return (<div>child</div>)

}

export default Child