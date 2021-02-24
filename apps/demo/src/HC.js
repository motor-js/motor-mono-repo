import React, { useEffect } from 'react'
import { useList, useHyperCube, useTable } from "@motor-js/engine"

const HC = () => {

  //console.log(engine)
  const qPage = {
    qTop: 0,
    qLeft: 0,
    qWidth: 4,
    qHeight: 10,
  };

  const cols= [
    { 
    qField: "country",
    qLabel: "Country" 
    },
    { 
      qField: "province",
      qLabel: "Province" 
    },
    {
      qField: "=1",
      qLabel: "1 Point" 
    },
    {
    qField: "=5",
     qLabel: "5 Points" 
    },
  ] 

 // const columnOrder =  [3,2,1,0]  //[2,1,0,3]
  //const columnSort = [2,1,0,3]

  const {
    qLayout,
    qData,
    mData,
    headerGroup
  } = useTable({
    cols,
    qPage,
  //  qColumnOrder: columnOrder,
  //  qInterColumnSortOrder: columnSort
  });

  console.log(mData)
  
  const renderTableHeader = () => {
  
  }

  return (
      <table class="ui selectable celled table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John</td>
          <td>No Action</td>
          <td>None</td>
        </tr>
        <tr>
          <td>Jamie</td>
          <td>Approved</td>
          <td>Requires call</td>
        </tr>
        <tr>
          <td>Jill</td>
          <td>Denied</td>
          <td>None</td>
        </tr>
        <tr class="warning">
          <td>John</td>
          <td>No Action</td>
          <td>None</td>
        </tr>
        <tr>
          <td>Jamie</td>
          <td class="positive">Approved</td>
          <td class="warning">Requires call</td>
        </tr>
        <tr>
          <td>Jill</td>
          <td class="negative">Denied</td>
          <td>None</td>
        </tr>
      </tbody>
    </table>
  )

}

export default HC