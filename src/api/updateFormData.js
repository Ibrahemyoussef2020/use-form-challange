const updateFormData = async (payload) => {
  const { name, role, products } = payload;

  const clearOldProducts = await fetch('https://fakestoreapi.com/products')
    .then(res => res.json());

  await Promise.all(
    clearOldProducts.map((product) =>
      fetch(`https://fakestoreapi.com/products/${product.id}`, {
        method: 'DELETE',
      })
    )
  );


  const postedProducts = await Promise.all(
    products.map((product) =>
      fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
      }).then(res => res.json())
    )
  );

 
  return {
    user: { name, role },
    products: postedProducts,
  };
};

export default updateFormData;
