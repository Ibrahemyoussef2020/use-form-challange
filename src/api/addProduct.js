const addProduct = async (newProduct) => {
  const response = await fetch('https://fakestoreapi.com/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newProduct),
  });
  if (!response.ok) {
    throw new Error('Error adding product');
  }
  return response.json();
};

export default addProduct;