
import { useState } from 'react';
import './App.css'
import Deals from './components/Deals/Deals';
import Homepage from './components/homepage/Homepage';
import Navbar from './components/homepage/Navbar';

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <Homepage cartItems={cartItems}></Homepage>
      <Deals cartItems={cartItems} setCartItems={setCartItems}></Deals>
    </>
  );
}

export default App
