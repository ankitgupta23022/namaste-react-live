import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const cartTotalPrice = useSelector((store) => store.cart.cartTotalPrice);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1 className="font-bold text-3xl"> Cart Items - {cartItems.length}</h1>

      {cartTotalPrice > 0 ? (
        <h1 className="font-bold text-3xl"> Cart Total - {cartTotalPrice}</h1>
      ) : (
        ""
      )}
      <button
        className="bg-green-100 p-2 m-5"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      <div className="flex">
        {cartItems.map((item) => (
          <FoodItem
            key={item.id + Math.floor(Math.random() * 1000)}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
