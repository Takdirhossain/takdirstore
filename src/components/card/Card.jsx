import "./Card.scss"
import { Link } from 'react-router-dom';

const Card = ({product}) => {
   
    return (
        <Link to="/product/1" className='link'>
           <div className='card'>
           <div className="cardimg">
                <img src={product.img} alt="" />
                <span>{product.session && "New Session"}</span>
            </div>
            <h2>{product.title}</h2>
            <div className="price">
            <h3>{product.oldprice}$</h3>
            <h3>{product.price}$</h3>
            </div>
           </div>
        </Link>
    );
};

export default Card;