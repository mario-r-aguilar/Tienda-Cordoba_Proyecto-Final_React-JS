import { useCartContext } from '../../context/CartContext/CartContext';
import './ItemCart.css';

const ItemCart = ({ product }) => {
	const { deleteItem } = useCartContext();
	return (
		<div className="cartProduct">
			<img
				className="cartImage"
				src={`../images/${product.pictureUrl}.png`}
				alt={product.title}
			/>
			<div>
				<p>Producto: {product.title}</p>
				<p>Cantidad: {product.quantity}</p>
				<p>Precio: {product.price}</p>
				<p>Subtotal: ${product.quantity * product.price}</p>
				<button onClick={() => deleteItem(product.id)}>Eliminar</button>
			</div>
		</div>
	);
};

export default ItemCart;
