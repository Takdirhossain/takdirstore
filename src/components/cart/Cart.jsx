import "./cart.scss"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const Cart = () => {
  const products = [
    {
      id: 1,
      img: "https://images.squarespace-cdn.com/content/v1/547a3834e4b053a861c4874e/1624219205079-2MV5PECBTTNFHIIYC8SX/Sustainably+Chic+%7C+Sustainable+Fashion+Blog+%7C+Sustainable+and+Ethical+Clothing+Brands+for+Men.jpg",
      title: "Shirt",
      oldprice: 12,
      price: 10,
      desc: "lfsejfkshne",
      session: true,
    },
    {
      id: 1,
      img: "https://images.squarespace-cdn.com/content/v1/547a3834e4b053a861c4874e/1624219205079-2MV5PECBTTNFHIIYC8SX/Sustainably+Chic+%7C+Sustainable+Fashion+Blog+%7C+Sustainable+and+Ethical+Clothing+Brands+for+Men.jpg",
      title: "Shirt",
      oldprice: 12,
      price: 10,
      session: true,
      desc: "lfsejfkshne",
    },
  ];
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} x ${item.price}
            </div>
          </div>
          <DeleteOutlineIcon
            className="delete"
           
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$</span>
      </div>
      <button >PROCEED TO CHECKOUT</button>
      <span className="reset" >
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;
