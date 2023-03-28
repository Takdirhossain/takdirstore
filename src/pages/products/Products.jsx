import { Label } from "@mui/icons-material";
import "./products.scss"
import List from "../../components/list/List";
import { useState } from "react";

const Products = () => {
    const [maxprice, setMaxprice] = useState(1000)
  return (
    <div className="products">
      <div className="left">
        <div className="productcategory">
          
          <h2>Product Category</h2>
          <div className="siderbar">
            <input type="checkbox" id="1" value="1" />
            <label>Shoes</label>
          </div>
          <div className="siderbar">
            <input type="checkbox" id="1" value="1" />
            <label>Skirts</label>
          </div>
          <div className="siderbar">
            <input type="checkbox" id="1" value="1" />
            <label>Coats</label>
          </div>
          <div className="filterbytprice">
            <h2>Filter By Price</h2>
            <input type="range" name="1000" min={0} max={1000} onChange={(e) => setMaxprice(e.target.value)}/>
            <span>{maxprice}</span>
          </div>
          <div className="siderbar">
            <h2>Hosrt By</h2>
            <div className="siderbar">
                <input type="radio" />
                <label htmlFor="">(Price Low To High)</label>
            </div>
            <div>
                <input type="radio" />
                <label htmlFor="">(Price High To Low)</label>
            </div>
          </div>
        </div>
        <div className="filter"></div>
        <div className="short"></div>
      </div>
      <div className="right">
      <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List></List>
      </div>
    </div>
  );
};

export default Products;
