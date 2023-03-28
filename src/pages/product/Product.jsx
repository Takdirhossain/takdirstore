import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import "./product.scss";
const Product = () => {
  const [qunatity, setQuantity] = useState(1);
  const [images, setimages] = useState(0);
  const data = [
    "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg",
    "https://images.pexels.com/photos/1209658/pexels-photo-1209658.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  ];
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={data[0]} alt="" onClick={(e) => setimages(0)} />
          <img src={data[1]} alt="" onClick={(e) => setimages(1)} />
        </div>
        <div className="mainimg">
          <img src={data[images]} alt="" />
        </div>
      </div>
      <div className="right">
        <h2>Titile</h2>
        <span className="price">!20$</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          eaque debitis dolore molestiae quisquam magnam incidunt, libero error!
          Magni, aliquam vitae. Ipsam nobis quas ut delectus libero iusto
          dignissimos officia?
        </p>
        <div className="qunatity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          <span>{qunatity}</span>
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="wishlist">
          <AddShoppingCartIcon /> Add To Cart
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> Add To Wishlist
          </div>
          <div className="item">
            <CompareArrowsIcon /> Add To Compare
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span> 
          <span>Product Type: T-Shirt</span> 
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="otherinfo">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
