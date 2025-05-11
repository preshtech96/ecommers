import React, { useEffect, useState } from 'react';

const Food = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState({});

  useEffect(() => {
    const fetchMeals = async () => {
      const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
      try {
        const requests = Array.from({ length: 10 }, () => fetch(url).then(res => res.json()));
        const results = await Promise.all(requests);
        const mealsArray = results.map(result => ({
          ...result.meals[0],
          price: (Math.random() * 15 + 5).toFixed(2),
        }));

        setTimeout(() => {
          setMeals(mealsArray);
          setLoading(false);
        }, 2000);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch meals');
        setLoading(false);
      }
    };

    fetchMeals();
  }, []);

  const toggleCart = (mealId) => {
    setCart((prev) => ({
      ...prev,
      [mealId]: !prev[mealId],
    }));
  };

  if (loading) return <div className="text-center mt-8 text-lg">Loading meals...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">{error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Make yourself comfortable with our delicious meals below:
      </h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center">
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="border border-gray-300 p-3 rounded-lg w-full max-w-[180px] h-[320px] flex flex-col justify-between text-center shadow-sm"
          >
            <div>
              <h4 className="text-sm font-semibold mb-2">{meal.strMeal}</h4>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-28 object-cover rounded"
              />
              <h2 className="text-lg font-bold mt-2">${meal.price}</h2>
              <p className="text-xs mt-2">
                {meal.strInstructions?.substring(0, 60) || 'No description'}...
              </p>
            </div>
            <button
              onClick={() => toggleCart(meal.idMeal)}
              className={`mt-3 px-2 py-1 text-sm rounded text-white transition-colors ${
                cart[meal.idMeal] ? 'bg-red-400' : 'bg-green-400'
              }`}
            >
              {cart[meal.idMeal] ? 'Remove from Cart' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
