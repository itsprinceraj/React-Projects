import { IoPersonOutline } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import { BsHandbag } from "react-icons/bs";
import { GrSearch } from "react-icons/gr";
import {useSelector} from "react-redux"
import { Link } from "react-router-dom";

export const Header = () => {
  

  const cart = useSelector((store)=> store.cart)
  // console.log(cart);


  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img
            className="myntra_home"
            src="images/myntra_logo.webp"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav className="nav_bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">
          Studio <sup>New</sup>
        </a>
      </nav>
      <div className="search_bar">
        <span className="search_icon">
          <GrSearch />
        </span>
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className="action_bar">
        <div className="action_container">
          <IoPersonOutline />
          <span className="action_name">Profile</span>
        </div>

        <div className="action_container">
          <GrFavorite />
          <span className="action_name">Wishlist</span>
        </div>

        <Link className="action_container" to="/bag">
          <BsHandbag />
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{cart.length}</span>
        </Link>
      </div>
    </header>
  );
};
