import './Item.css';
const Item = ({ product }) => {
	return (
		<div className="card">
			<div className="cardTop">
				<span>{product.category}</span>
			</div>

			<img
				className="imgCard"
				alt={product.title}
				src={`images/${product.pictureUrl}.png`}
			/>
			<div>
				<h3 className="textCard">{product.title}</h3>
			</div>

			<div>
				<h3 className="textCard priceCard">${product.price}</h3>
			</div>
			<div>
				<h5 className="textCard">Id: {product.id}</h5>
			</div>
			<button className="cardButton">Ver detalle del producto</button>
			<div className="cardBottom">
				<span>Stock: {product.stock}</span>
			</div>
		</div>
	);
};

export default Item;
