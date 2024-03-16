import './App.css';
import data from './data';
import React, { useMemo } from 'react';
import { useState } from 'react';
import Table from './components/Table'

function App() {
  const columns = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Category',
        accessor: 'category',
      },
      {
        Header: 'Subcategory',
        accessor: 'subcategory',
      },
      {
        Header: 'Created At',
        accessor: 'createdAt',
      },
      {
        Header: 'Updated At',
        accessor: 'updatedAt',
      },
      {
        Header: 'Price',
        accessor: 'price',
      },
      {
        Header: 'Sale Price',
        accessor: 'sale_price',
      },
    ],
    []
  );


  return (
    <div className='flex flex-col justify-center items-center gap-3'>
      <h1 className='text-3xl font-extrabold'>Data</h1>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;
