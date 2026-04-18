
import { useState } from 'react';
import './App.css'
import Deals from './components/Deals/Deals';
import Homepage from './components/homepage/Homepage';
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <Homepage cartItems={cartItems}></Homepage>
      <Deals cartItems={cartItems} setCartItems={setCartItems}></Deals>
      <Steps></Steps>
      <Pricing></Pricing>
    </>
  );
}

export default App
