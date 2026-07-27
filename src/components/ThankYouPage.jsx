import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircleIcon, ArrowLeftIcon } from "./Icons";

const ThankYouPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const items = location.state.cartItems;

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="thank-you-page">
      <CheckCircleIcon size={52} className="success-icon" />
      <h1>Obrigado pela compra!</h1>
      <p className="subtitle">Seu pedido no Shoply foi confirmado.</p>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span>
              {item.name} × {item.quantity}
            </span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <p>Total: ${totalPrice.toFixed(2)}</p>
      <button onClick={() => navigate("/")}>
        <ArrowLeftIcon size={16} />
        Voltar ao catálogo
      </button>
    </div>
  );
};

export default ThankYouPage;