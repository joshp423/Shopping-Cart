import './App.css';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router';

const App = () => {
  // const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    
    fetch('https://fakestoreapi.com/products')

    .then((response) => response.json())
    .then((data) => {
      setProducts(data);
      console.log(data);
    })
    .catch((error) => console.error(error));

  }, []);

  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
