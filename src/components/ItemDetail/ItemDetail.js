import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ product }) => {
	// eslint-disable-next-line no-unused-vars
	const [cantidad, setCantidad] = useState(0);
	const { addToCart } = useCartContext();

	const onAdd = (count) => {
		setCantidad(count);
		addToCart(product, count);
	};

	return (
		<div className="productDetailContainer">
			<div className="productDetail">
				<img
					className="imgCard"
					alt={product.title}
					src={`../images/${product.pictureUrl}.png`}
				/>
				<div>
					<h1 className="textCard">{product.title}</h1>
				</div>

				<div>
					<h2 className="textCard priceCard">$ {product.price}</h2>
				</div>
				<div>
					<p className="textCard">{product.description}</p>
				</div>
			</div>

			<div className="countProduct">
				{cantidad > 0 ? (
					<div>
						<Link to="/">
							<button className="buttonBack">Seguir Comprando</button>
						</Link>
						<Link to="/cart">
							<button className="buttonFinish">Terminar compra</button>
						</Link>
					</div>
				) : (
					<div className="countProductCenter">
						<div>
							<ItemCount
								stock={product.stock}
								initial={1}
								onAdd={onAdd}
							/>
						</div>
						<div className="unitsAvailable">
							<span>{product.stock} Unidades Disponibles</span>
						</div>
						<div>
							<Link to="/">
								<button className="buttonBack">Seguir Comprando</button>
							</Link>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default ItemDetail;
