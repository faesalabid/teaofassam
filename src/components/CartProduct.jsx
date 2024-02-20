import "../styles/cartpop.css";
import deleteImg from "../assets/delete.svg";

function CartProduct({ item, index, onUpdateQuantity, onDelete }) {
  const { image, name, price, size, quantity } = item;

  const handleQuantityChange = (delta) => {
    onUpdateQuantity(index, delta);
  };

  const handleDelete = () => {
    onDelete(index);
  };

  return (
    <div className="popup-product-card">
      <div className="card-top">
        <img src={image} alt={name} />
        <div className="popup-product-details">
          <h3>{name}</h3>
          <p>{size}</p>
          <div className="popup-counter">
            <button
              onClick={() => handleQuantityChange(-1)}
              disabled={quantity <= 1}
            >
              -
            </button>
            <p>{quantity}</p>
            <button onClick={() => handleQuantityChange(1)}>+</button>
          </div>
        </div>
      </div>
      <div className="price-delete">
        <p>${(parseFloat(price.substring(1)) * quantity).toFixed(2)}</p>
        <img src={deleteImg} onClick={handleDelete} />
      </div>
    </div>
  );
}

export default CartProduct;
