import "../Card/Card.css";

export const Card = ({ title, price, address, date, img }) => {
  return (
    <a href="product.html" className="card">
      <img className="card_img" src={img} alt="{ img }" />
      <h5 className="card_title">{title}</h5>
      <strong className="card_price">{price}</strong>
      <div className="card_box">
        <span className="card_desc">{address}</span>
        <span className="card_desc">{date}</span>
      </div>
    </a>
  );
};
