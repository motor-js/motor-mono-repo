import React from 'react'
import { useList } from '@motor-js/engine'

const List = () => {

  const dimension = ['country']

  const { mData } = useList({ dimension })

  console.log(mData)

  return (<div>List</div>)

}

export default List
