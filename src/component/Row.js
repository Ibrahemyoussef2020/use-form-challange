import React from 'react'
import Edite from './Edite'
import { useCustomForm } from '../hooks'

const Row = ({item , editeUiProduct}) => {
   
  return (
    <tr key={item.id}>
        <td className='title-item'>{item.title}</td>
        <td className='price-item'>{item.price}</td>
        <td className='cat-item'>{item.category}</td>
        <td><Edite id={item.id} editeUiProduct={editeUiProduct}/></td>
    </tr>
  )
}

export default Row
