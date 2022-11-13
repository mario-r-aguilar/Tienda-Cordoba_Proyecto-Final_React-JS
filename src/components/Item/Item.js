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
				<h5 className="textCard">Nombre: </h5>
				<span className="textCardH"> {product.title}</span>
			</div>

			<div>
				<h5 className="textCard">Precio: </h5>
				<span className="textCardH"> ${product.price}</span>
			</div>
			<div>
				<h5 className="textCard">Descripción: </h5>
				<span className="textCardH"> {product.description} </span>
			</div>
			<div>
				<h5 className="textCard">Id: </h5>
				<span className="textCardH"> {product.id} </span>
			</div>
			<button className="cardButton">Ver detalle del producto</button>
			<div className="cardBottom">
				<span>Stock: {product.stock}</span>
			</div>
		</div>
	);
};

export default Item;
