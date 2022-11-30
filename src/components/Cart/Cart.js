import { Link, useNavigate } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import {
	addDoc,
	collection,
	getFirestore,
	serverTimestamp,
} from 'firebase/firestore';
import Swal from 'sweetalert2';
import './Cart.css';

const Cart = () => {
	const { cartList, totalPrice } = useCartContext();
	const navigate = useNavigate();

	const order = {
		buyer: {
			user: 'Luciano Lopez',
			email: 'lucianolopez@gmail.com',
			phone: '3515111111',
			address: 'San Martin 1024',
		},
		item: cartList.map((product) => ({
			id: product.id,
			title: product.title,
			price: product.price,
			quantity: product.quantity,
		})),
		total: totalPrice(),
		date: serverTimestamp(),
	};

	const buyFinish = () => {
		const buyDb = getFirestore();
		const orderBuyCollection = collection(buyDb, 'orders');
		addDoc(orderBuyCollection, order)
			.then(({ id }) => {
				console.log(id);
				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: `Muchas Gracias por su Compra! \n 
					Su número de orden es:  ${id}`,
					showConfirmButton: true,
				});
				navigate('/');
			})
			.catch((error) => console.log(error));
	};

	if (cartList.length === 0) {
		return (
			<>
				<h1 className="noProductFind">No hay productos en el carrito</h1>
				<Link to="/">
					<button className="buttonMakePurchase">Realizar compra</button>
				</Link>
			</>
		);
	}

	return (
		<>
			<div className="cartContainer">
				{cartList.map((product) => (
					<ItemCart key={product.id} product={product} />
				))}
			</div>
			<div>
				<h1 className="totalPrice">Precio Total: ${totalPrice()}</h1>
				<button className="buttonBuy" onClick={buyFinish}>
					Comprar
				</button>
			</div>
		</>
	);
};

export default Cart;
