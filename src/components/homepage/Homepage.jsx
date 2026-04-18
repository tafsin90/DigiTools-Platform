import React from 'react'
import Navbar from './Navbar'
import Hero from "./Hero";

function Homepage({ cartItems }) {
  return (
    <div className="pt-24">
      <Navbar cartItems={cartItems}></Navbar>
      <Hero></Hero>
    </div>
  );
}

export default Homepage