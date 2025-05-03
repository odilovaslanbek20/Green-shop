import { useSelector } from "react-redux";

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 16;
  const discount = 0;
  const total = subtotal - discount + shipping;

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          {cartItems.length === 0 ? (
            <p>Savatcha bo‘sh</p>
          ) : (
            <table className="w-full border">
              <thead>
                <tr className="text-left border-b">
                  <th className="p-2">Products</th>
                  <th className="p-2">Price</th>
                  <th className="p-2">Quantity</th>
                  <th className="p-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-2 flex items-center gap-2">
                      <img src={item.image} alt={item.name} className="w-16 h-16" />
                      <div>
                        <p className="font-bold">{item.name}</p>
                        <p className="text-sm text-gray-500">SKU: {item.id}</p>
                      </div>
                    </td>
                    <td className="p-2">${item.price}</td>
                    <td className="p-2">{item.quantity}</td>
                    <td className="p-2">${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="w-full md:w-1/3 border p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Card Total</h3>
          <div className="space-y-1 text-sm">
            <p>Subtotal: <span className="float-right">${subtotal}</span></p>
            <p>Coupon Discount: <span className="float-right text-red-500">- ${discount}</span></p>
            <p>Shipping: <span className="float-right">${shipping}</span></p>
            <hr />
            <p className="font-bold">Total: <span className="float-right text-green-600">${total}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
