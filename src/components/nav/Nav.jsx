import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./nav.scss"
import { Link } from "react-router-dom";
import { useState } from "react";
import Cart from "../cart/Cart";

const Nav = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="navbar">
      <div className="navwrapper">
        <div className="left">
          <div className="iteam">
            <img className="" src="https://cdn.britannica.com/22/171722-131-E03A7DB5/Union-Jack-British-Flag-of-Great-Britain.jpg" alt="" />
            <ArrowDropDownIcon />
          </div>
          <div className="iteam">
            <span>USD</span>
            <ArrowDropDownIcon />
          </div>
          <span>Man</span>
          <span>Women</span>
          <span>Children</span>
        </div>
        <div className="center">
            <span><Link className="link">TakdirStore</Link></span>
        </div>
        <div className="right">
            <span> <Link className="link" to="/">HomePage</Link> </span>
            <span><Link className="link">About</Link> </span>
            <span><Link className="link">Contact</Link> </span>
            <span><Link className="link">Store</Link> </span>
            <SearchIcon/>
            <PersonIcon></PersonIcon>
            <FavoriteBorderIcon/>
            <div className="cartIcon" onClick={() => setOpen(!open)}>
                <  ShoppingCartIcon/>
                <span>0</span>
            </div>
        </div>
      </div>
      {
        open && <Cart/>
      }
    </div>
  );
};

export default Nav;
