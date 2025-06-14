import { useWatch } from 'react-hook-form';
import { useCustomForm } from '../hooks';
import useProducts from '../hooks/useProducts';
import '../style/tabel.css';
import EditeField from './EditeField';
import Row from './Row';
import Edite from './Edite';
import { useEffect } from 'react';

const Table = () => {
    const { productControl, productRegister, productErrors , updateUiProduct , editeUiProduct , setProductValue , handleProductSubmit  } = useCustomForm();
 

     const products = useWatch({
      control: productControl,
      name: 'products',
    });

  return (
    <div className="tabel">
      <table>
        <thead>
          <tr>
            <th className='title-head'>Title</th>
            <th className='price-head'>Price</th>
            <th className='cat-head'>Category</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
        {products?.map((item) =>
          item.isEditing ? (
      <tr key={`${item.id}-edit`}>
        <td className='w-full'>
          <EditeField 
            productControl={productControl}
            id={item.id} 
            updateUiProduct={updateUiProduct} 
            productRegister={productRegister}
            productErrors={productErrors}
            handleProductSubmit={handleProductSubmit}
            />
        </td>
      </tr>
    ) : (
      <Row item={item} editeUiProduct={editeUiProduct} key={`${item.id}-view`} />
    )
  )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;


