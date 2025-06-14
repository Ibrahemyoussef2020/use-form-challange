const fetchProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');

  console.log(response);
  
  if (!response.ok) {
    throw new Error('Error fetching products');
  }
  return response.json();
};

export default fetchProducts