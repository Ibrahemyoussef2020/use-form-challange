import { useWatch } from 'react-hook-form';
import Field from './Field';
import Update from './Update';

const EditeField = ({
  id,
  updateUiProduct,
  productRegister,
  productErrors,
  productControl,
  handleProductSubmit
}) => {
  const products = useWatch({
    control: productControl,
    name: 'products',
  });

  const index = products.findIndex((p) => p.id === id);
  if (index === -1) return null;

  const formData = ['title', 'price', 'category'];


  return (
    <div
 
    >
      {formData.map((field, fieldIndex) => (
        <Field
          key={`${field}_${fieldIndex}`}
          type="text"
          name={`products.${index}.${field}`}
          register={productRegister}
          error={productErrors?.products?.[index]?.[field]}
        />
      ))}

      <div>
        <Update id={id}  updateUiProduct={updateUiProduct}/>
      </div>
    </div>
  );
};

export default EditeField;

