import React from 'react'
import Form from './Form'
import Table from './Tabel'

import '../style/product-list.css';
import Submit from './Submit';

const ProductList = () => {
  return (
    <div className='product-list'>
      <Form />
      <Table />
      <Submit />
    </div>
  )
}

export default ProductList
