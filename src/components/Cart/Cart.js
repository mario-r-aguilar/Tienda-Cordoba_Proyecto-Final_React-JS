import { Link, useNavigate } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import {
	addDoc,
	collection,
	getFirestore,
	serverTimestamp,
	doc,
	updateDoc,
} from 'firebase/firestore';
import Swal from 'sweetalert2';
import { useState } from 'react';
import './Cart.css';

const Cart = () => {
	const { cartList, totalPrice, removeList } = useCartContext();
	const navigate = useNavigate();
	const [formValues, setFormValues] = useState({
		user: '',
		email: '',
		phone: '',
		address: '',
	});

	const inputChange = (e) => {
		setFormValues({
			...formValues,
			[e.target.name]: e.target.value,
		});
	};

	const order = {
		buyer: {
			user: formValues.user,
			email: formValues.email,
			phone: formValues.phone,
			address: formValues.address,
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
		if (
			formValues.user !== '' &&
			formValues.email !== '' &&
			formValues.phone !== '' &&
			formValues.address !== ''
		) {
			const buyDb = getFirestore();
			const orderBuyCollection = collection(buyDb, 'orders');
			addDoc(orderBuyCollection, order)
				.then(({ id }) => {
					Swal.fire({
						position: 'top-end',
						icon: 'success',
						title: `Muchas Gracias por su Compra!`,
						text: `Su número de orden es:  ${id}`,
						showConfirmButton: true,
					});
					removeList();
					navigate('/');
				})
				.then(() => {
					cartList.forEach((product) => {
						const query = doc(buyDb, 'products', product.id);
						updateDoc(query, { stock: product.stock - product.quantity });
					});
				})
				.catch((error) => console.log(error));
		} else {
			Swal.fire({
				position: 'top-end',
				icon: 'error',
				title: `Por favor complete todos los campos`,
				showConfirmButton: true,
			});
		}
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

				<h2 className="formTittle">Por favor complete sus datos:</h2>
				<div className="formBuy">
					<input
						className="fieldInput"
						name="user"
						type="text"
						placeHolder="Nombre Completo"
						value={formValues.user}
						onChange={inputChange}
					/>
					<input
						className="fieldInput"
						name="email"
						type="email"
						placeHolder="E-mail"
						value={formValues.email}
						onChange={inputChange}
					/>
					<input
						className="fieldInput"
						name="phone"
						type="tel"
						placeHolder="Teléfono"
						value={formValues.phone}
						onChange={inputChange}
					/>
					<input
						className="fieldInput"
						name="address"
						type="text"
						placeHolder="Dirección"
						value={formValues.address}
						onChange={inputChange}
					/>
				</div>

				<button className="buttonBuy" onClick={buyFinish}>
					Comprar
				</button>
			</div>
		</>
	);
};

export default Cart;
