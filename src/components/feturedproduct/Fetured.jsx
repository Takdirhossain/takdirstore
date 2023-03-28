import Card from "../card/Card";
import "./fetured.scss"

const Fetured = () => {
  const data = [
    {
      id: 1,
      img: "https://images.squarespace-cdn.com/content/v1/547a3834e4b053a861c4874e/1624219205079-2MV5PECBTTNFHIIYC8SX/Sustainably+Chic+%7C+Sustainable+Fashion+Blog+%7C+Sustainable+and+Ethical+Clothing+Brands+for+Men.jpg",
      title: "Shirt",
      oldprice: 12,
      price: 10,
      session: true

    },
    {
      id: 1,
      img: "https://images.squarespace-cdn.com/content/v1/547a3834e4b053a861c4874e/1624219205079-2MV5PECBTTNFHIIYC8SX/Sustainably+Chic+%7C+Sustainable+Fashion+Blog+%7C+Sustainable+and+Ethical+Clothing+Brands+for+Men.jpg",
      title: "Shirt",
      oldprice: 12,
      price: 10,
      session: true

    },
    {
      id: 1,
      img: "https://cdn.shopify.com/s/files/1/0508/2690/3702/products/002SECL22V2S_2_5ff2f720-4499-40bb-afb7-05949ca69edb.jpg?v=1666253238",
      title: "Shirt",
      oldprice: 12,
      price: 10,
    },
    {
      id: 1,
      img: "https://cdn.cliqueinc.com/posts/78541/fashion-trends-short-women-should-avoid-2014-78541-1586196827385-main.700x0c.jpg",
      title: "Shirt",
      oldprice: 12,
      price: 10,
      session: true
    },
  ];
  return (
    <div className="fetured">
      <div className="feturedtitle">
        <h1>Fetured Product</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, sequi
          blanditiis. Sint odit eaque autem, aliquam corporis a quis commodi
          explicabo, pariatur in obcaecati dolorem fugit quod qui quibusdam
          dolorum.
          blanditiis. Sint odit eaque autem, aliquam corporis a quis commodi
          explicabo, pariatur in obcaecati dolorem fugit quod qui quibusdam
          dolorum.
        </p>
      </div>
      <div className="iteam">
{
    data?.map(product => <Card product={product} key={product.id}></Card>)
}
      </div>
    </div>
  );
};

export default Fetured;
