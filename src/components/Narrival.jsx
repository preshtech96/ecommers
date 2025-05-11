import React, { useEffect, useState } from 'react';
import { AiOutlineShoppingCart, AiOutlineDelete } from 'react-icons/ai';

const Narrival = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true); // loading state

  useEffect(() => {
    const url = 'https://fakestoreapi.com/products';
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setTimeout(() => {
          setProducts(result);
          setLoading(false);
        }, 5000); // 5-second delay
      } catch (error) {
        console.error(error);
        setError('Failed to fetch products');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const addToCart = (product) => {
    if (!cart.find((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const isInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold">
        Loading products, please wait...
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-6 p-4 justify-center">
      {error && <p className="text-red-500">{error}</p>}
      {products.map((item) => (
        <div
          key={item.id}
          className="w-72 border rounded-xl p-4 shadow-md flex flex-col items-center 
             transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        >
          <img className="h-40 object-contain mb-2" src={item.image} alt={item.title} />
          <div className="text-center">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-sm text-gray-500">{item.category}</p>
            <p className="text-sm line-clamp-2 my-1">{item.description}</p>
            <p className="text-blue-600 font-bold">${item.price}</p>
          </div>
          <div className="mt-3">
            {isInCart(item.id) ? (
              <button
                onClick={() => removeFromCart(item.id)}
                className="flex items-center gap-2 text-white cursor-pointer bg-red-500 px-3 py-1 rounded-md hover:bg-red-600"
              >
                <AiOutlineDelete />
                Remove from Cart
              </button>
            ) : (
              <button
                onClick={() => addToCart(item)}
                className="flex items-center gap-2 text-white cursor-pointer bg-green-600 px-3 py-1 rounded-md hover:bg-green-700"
              >
                <AiOutlineShoppingCart />
                Add to Cart
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Narrival;
