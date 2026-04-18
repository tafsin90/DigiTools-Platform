import React from 'react'
import Navbar from './Navbar'
import Hero from "./Hero";

function Homepage({ cartItems }) {
  return (
    <div>
      <Navbar cartItems={cartItems}></Navbar>
      <Hero></Hero>
    </div>
  );
}

export default Homepage