import { useCart } from "../context/CartContext";

const Cart = () => {
const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

if (cart.length === 0) {
    return <h2 className="text-center mt-10 text-xl">Your Cart is Empty</h2>;
}

return (
    <div className="p-5">
    <h1 className="text-2xl font-bold mb-5">Your Cart</h1>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* LEFT SIDE: CART ITEMS */}
        <div className="md:col-span-2 space-y-4">
        {cart.map((item) => (
            <div
            key={item.id}
            className="flex items-center gap-4 p-4 shadow-md rounded-xl bg-white"
            >
            <img
                src={item.image}
                className="w-20 h-20 rounded-md object-cover"
            />

            <div className="flex-1">
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-green-700 font-bold">₹{item.price}</p>

                {/* QUANTITY */}
                <div className="flex items-center gap-2 mt-2">
                <button
                    onClick={() =>
                    updateQuantity(item.id, Math.max(1, item.qty - 1))
                    }
                    className="px-3 py-1 bg-gray-300 rounded"
                >
                    -
                </button>

                <span className="px-3 py-1 bg-gray-100 rounded">
                    {item.qty}
                </span>

                <button
                    onClick={() => updateQuantity(item.id, item.qty + 1)}
                    className="px-3 py-1 bg-gray-300 rounded"
                >
                    +
                </button>
                </div>
            </div>

            {/* REMOVE BUTTON */}
            <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 font-semibold"
            >
                Remove
            </button>
            </div>
        ))}
        </div>

        {/* RIGHT SIDE: ORDER SUMMARY */}
        <div className="bg-white shadow-lg rounded-xl p-5 h-fit">
        <h2 className="text-xl font-bold mb-3">Order Summary</h2>

        <p className="text-lg font-semibold">
            Total: <span className="text-green-600">₹{cartTotal}</span>
        </p>

        <button
            className="w-full bg-green-600 text-white py-2 rounded-lg mt-4
            hover:bg-green-700 active:scale-95"
        >
            Checkout
        </button>
        </div>

    </div>
    </div>
);
};

export default Cart;
