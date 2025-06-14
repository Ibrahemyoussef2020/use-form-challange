import { useQuery, useMutation } from '@tanstack/react-query';
import { addProduct, fetchProducts, updateFormData, updateProduct } from "../api";


const useProducts = ()=>{

    const fetchProductsOptions = {
        queryKey: ['products'],
        queryFn: fetchProducts,
        select: (data) =>
        data.map((product) => ({
            ...product,
            isEditing: false,
        })),
    };


    const { data: products, isLoading, error } = useQuery(fetchProductsOptions);
    const { mutate: addProductMutation, isLoading: isAdding } = useMutation(addProduct);
    const { mutateAsync:mutateAsyncProduct  , isLoading:isUpdating} = useMutation({ mutationFn:updateFormData}); 
    
    return {
        products,
        isLoading,
        error,
        addProductMutation,
        isAdding,
        mutateAsyncProduct,
        isUpdating,
    }
}

export default useProducts;