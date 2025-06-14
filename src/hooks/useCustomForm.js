import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef } from "react";
import { toast } from 'react-toastify';

import { userSchema, productSchema } from "../helpers";
import useProducts from "./useProducts"; 
import { hasEmptyValue } from "../utils";

const useCustomForm = () => {
  const {
    products,
    isLoading,
    mutateAsyncProduct,
    handleEditProduct,
    handleUpdateProduct,
  } = useProducts();

  const hasInitialized = useRef(false);


  const usersForm = useForm({
    mode: 'all',
    resolver: zodResolver(userSchema),
    defaultValues: {
      user: { name: '', role: '' },
    },
  });

  const productsForm = useForm({
    mode: 'all',
    resolver: zodResolver(productSchema),
    defaultValues: { products: [] },
  });

  
  useEffect(() => {
    if (products?.length && !hasInitialized.current) {
      productsForm.reset({
        products: products.map(p => ({ ...p, isEditing: false })),
      });
      hasInitialized.current = true;

      console.log(products);

   if (localStorage.getItem('user')) {
      JSON.parse(localStorage.getItem('user') );
  }

  if (localStorage.getItem('products')) {
     JSON.parse(localStorage.getItem('products') );
  }
      
    }
  }, [products]);


  const serveData = ( products, user)=>{
    localStorage.setItem('products' ,  JSON.stringify(products) )
    localStorage.setItem('user' , JSON.stringify(user));
  }


  // update

const updateUiProduct = (id) => {
  const updatedProducts = productsForm.getValues('products');

   console.log('Updated USER:', usersForm.getValues('user'));

  const index = updatedProducts.findIndex(p => p.id === id);
  if (index === -1) {
    alert('Product not found');
    return;
  }

  const updatedProduct = {
    ...updatedProducts[index],
    isEditing: false,
  };

  

   if (hasEmptyValue(updatedProduct)) {
     toast.error('You should fill all fields')
     return
  }

  productsForm.setValue(`products.${index}`, updatedProduct, {
    shouldValidate: false,
    shouldDirty: true,
  });

  //console.log('Updated Products:', productsForm.getValues('products'));
 

  const serveProducts = productsForm.getValues('products') 
  const serveUser = usersForm.getValues('user')
  serveData(serveProducts , serveUser);

};


  // Edite

  const editeUiProduct = (id) => {
    const values = productsForm.getValues();
    const index = values.products.findIndex(p => p.id === id);
    if (index === -1) return;

    const updated = {
      ...values.products[index],
      isEditing: true,
    };

    productsForm.setValue(`products.${index}`, updated, {
      shouldValidate: false,
      shouldDirty: true,
    });

    
  };

  // Submit

const submitForm = async (e) => {
  e.preventDefault();

    console.log('Updated USER:', usersForm.getValues('user'));

  let userData , productData;

  if (hasEmptyValue(usersForm.getValues('user'))) {
     toast.error('You should fill all fields')
     return
  }

  if (localStorage.getItem('user')) {
     userData = JSON.parse(localStorage.getItem('user') ) ;
  }

  if (localStorage.getItem('products')) {
     productData = JSON.parse(localStorage.getItem('products'));
  }

 
  const payload = {
    name: usersForm.getValues('user')?.name,
    role: usersForm.getValues('user')?.role,
    products: productData,
  };

  console.log(
    payload
  );
  
  
  await mutateAsyncProduct(payload).then(()=>{
    toast.success('has added')
  });


}


 console.log(
      'errrrrrrrrrrr',
      usersForm.formState.errors
    );
    

  return {
    products,
    productControl: productsForm.control,

    productErrors: productsForm.formState.errors,
    userErrors: usersForm.formState.errors,

    productRegister: productsForm.register,
    userRegister: usersForm.register,

    handleProductSubmit: productsForm.handleSubmit,
    updateUiProduct,
    editeUiProduct,
    submitForm,   
  };
};


export default useCustomForm;

