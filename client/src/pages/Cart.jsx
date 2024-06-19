import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../services/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCheckout = () => {
    // Implement checkout logic here
    alert("Proceed to Checkout");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto bg-gray-800 shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
        {cart.length === 0 ? (
          <p className="text-gray-400">Your cart is empty.</p>
        ) : (
          <>
            <table className="w-full mb-6">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-2 text-left">Product</th>
                  <th className="py-2 text-left">Description</th>
                  <th className="py-2 text-left">Quantity</th>
                  <th className="py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-b border-gray-700">
                    <td className="py-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded"
                      />
                    </td>
                    <td className="py-2">
                      <h2 className="font-semibold">{item.name}</h2>
                      <p className="text-gray-400">{item.description}</p>
                    </td>
                    <td className="py-2">{item.quantity}</td>
                    <td className="py-2">
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-red-500 hover:text-red-700 focus:outline-none"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between items-center">
              <button
                onClick={handleClearCart}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 focus:outline-none"
              >
                Clear Cart
              </button>
              <button
                onClick={handleCheckout}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 focus:outline-none"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
