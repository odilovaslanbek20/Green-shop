import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../redux/cartSlice';

function ShoppingCart() {
  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Shopping Cart</h2>

      {cartItems.length > 0 ? (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-md" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-600">Price: ${item.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-lg font-semibold text-gray-800">x{item.quantity}</span>
                <span className="text-lg font-semibold text-green-600">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-xl text-gray-600">Your cart is empty.</p>
      )}

      {cartItems.length > 0 && (
        <div className="mt-6 flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800">Total Price:</h3>
          <span className="text-2xl font-bold text-green-600">${totalPrice.toFixed(2)}</span>
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="mt-6 flex justify-between">
          <button
            onClick={handleClearCart}
            className="w-1/2 py-3 bg-red-600 text-white font-bold rounded-md hover:bg-red-500 transition-all"
          >
            Clear Cart
          </button>
          <button className="w-1/2 py-3 bg-green-600 text-white font-bold rounded-md hover:bg-green-500 transition-all">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
