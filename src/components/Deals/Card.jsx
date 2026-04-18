import React from "react";
import portfolio from "/icons/portfolio.png";
import { FaCheck } from "react-icons/fa";

function Card() {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-sm">
        <div className="card-body">
          <p className="badge badge-xs badge-warning">best seller</p>
          <img src={portfolio} className="w-5"/>
          <h1>AI Writing pro</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, ratione aut nesciunt excepturi voluptatum eius.</p>
          <p>
            <span>$29</span>/month
          </p>
          <ul>
            <li>
              <FaCheck />
              <p>Unlimited AI generations</p>
            </li>
            <li>
              <FaCheck />
              <p>Unlimited AI generations</p>
            </li>
            <li>
              <FaCheck />
              <p>Unlimited AI generations</p>
            </li>
          </ul>
          <div className="mt-6">
            <button className="btn btn-primary btn-block">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
