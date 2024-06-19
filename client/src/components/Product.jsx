import React from "react";
import { useDispatch } from "react-redux";
import { increment } from "../services/cartSlice";

const Product = ({ name, image, desc, id }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    const itemDetails = { id, name, image, desc, quantity: 1 };
    dispatch(increment(itemDetails));
  };
  return (
    <div className="max-w-xs mx-auto bg-gray-200 shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-56 object-cover object-center"
        src={image}
        alt="product"
      />
      <div className="p-4">
        <h2 className="font-bold text-xl mb-2">{name}</h2>
        <p className="text-gray-700 text-base">{desc}</p>
        <div className="mt-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2">
            Buy Now
          </button>
          <button
            onClick={handleAddToCart}
            className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
