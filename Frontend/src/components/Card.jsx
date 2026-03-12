import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div className="hover-3d">
      <div className="card bg-base-100 w-76 shadow-sm">
        <figure>
          <img src={item.image} alt={item.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.type}</div>
          </h2>
          <p>{item.author}</p>
          <div className="card-actions flex flex-row justify-between">
            <div className="badge badge-outline">$ {item.price}</div>
            <div>
              <Link
                to="/buy"
                state={{ item }}   // 👈 pass item data here
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;