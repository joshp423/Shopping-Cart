import './App.css';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/Navbar/navBar';
import Footer from './components/Footer/footer';

const App = () => {
  const [cart, setCart] = useState(new Map());
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
      <NavBar cart= {cart} />
      <Outlet context={{ products, cart, setCart }} />
      <Footer />
    </>
  );
};

export default App;
