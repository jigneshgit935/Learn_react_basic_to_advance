import React from 'react';
import './App.css';
const App = () => {
  // example 1
  const names = ['jinu', 'jignesh', 'rajesh', 'kamlesh'];

  // example 2
  const products = [
    {
      id: 1,
      name: 'product 1',
      price: 10,
    },
    {
      id: 2,
      name: 'product 2',
      price: 20,
    },
    {
      id: 3,
      name: 'product 3',
      price: 30,
    },
    {
      id: 4,
      name: 'product 4',
      price: 40,
    },
  ];

  // example 3 return map function
  const fruits = ['Apple', 'Banana', 'Mango'];

  // using map
  const frutItems = fruits.map((fruit, index) => <li key={index}>{fruit}</li>);
  return (
    <div className="App">
      <h1>Array map</h1>
      {/* example 1 */}
      <ul>
        {names.map((name, index) => {
          return (
            <li
              key={index}
              style={{ textTransform: 'capitalize', fontSize: '20px' }}
            >
              {name}
            </li>
          );
        })}
      </ul>

      {/* example 2 */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>

      {/* exmaple 3 */}
      <ul>{frutItems}</ul>
    </div>
  );
};

export default App;
