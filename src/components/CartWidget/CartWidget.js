import cart from '../../assets/carrito.png';
import { useCartContext } from '../../context/CartContext/CartContext';
import './CartWidget.css';

const CartWidget = () => {
	const { totalProducts } = useCartContext();
	return (
		<div className="cartWidgetContainer">
			<div className="navbar-cart">
				<img className="navbar-cart-img" src={cart} alt="Cart Widget" />{' '}
			</div>
			{totalProducts() !== 0 && (
				<span className="total">{totalProducts()}</span>
			)}
		</div>
	);
};

export default CartWidget;
