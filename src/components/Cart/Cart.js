import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import './Cart.css';

const Cart = () => {
	const { cartList, totalPrice } = useCartContext();
	if (cartList.length === 0) {
		return (
			<>
				<h2>No hay productos en el carrito</h2>
				<Link to="/">
					<button>Realizar compra</button>
				</Link>
			</>
		);
	}

	return (
		<>
			{cartList.map((product) => (
				<ItemCart key={product.id} product={product} />
			))}

			<p>Precio Total: ${totalPrice()}</p>
		</>
	);
};

export default Cart;
