import { createContext, useState, useContext } from 'react';
const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
	//Cart
	const [cartList, setCartList] = useState([]);

	//Functions

	const addToCart = (item, quantity) => {
		if (isInCart(item.id)) {
			setCartList(
				cartList.map((product) => {
					return product.id === item.id
						? { ...product, quantity: product.quantity + quantity }
						: product;
				})
			);
		} else {
			setCartList([...cartList, { ...item, quantity }]);
		}
	};

	console.log('Carrito', cartList);

	const removeList = () => setCartList([]);

	const isInCart = (id) => {
		return cartList.find((product) => product.id === id) ? true : false;
	};

	const deleteItem = (id) =>
		setCartList(cartList.filter((product) => product.id !== id));

	return (
		<CartContext.Provider
			value={{ addToCart, removeList, isInCart, deleteItem }}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
