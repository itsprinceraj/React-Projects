import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../Store/bagSlice";

export const HeroSection = ({ item }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart);
  const cartItemExist = cartItems.indexOf(item.id) >= 0;
  // console.log(item.id, cartItemExist);

  const handleAddToCart = () => {
    dispatch(bagAction.addBagItem(item.id));
  };
  const handleRemoveFromCart = () => {
    dispatch(bagAction.removeItem(item.id));
  };



  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {cartItemExist ? (
        <button
          className="btn-add-bag btn btn-danger"
          onClick={handleRemoveFromCart}
        >
          Remove from Cart
        </button>
      ) : (
        <button className="btn-add-bag" onClick={handleAddToCart}>
          Add to Cart
        </button>
      )}
    </div>
  );
};
