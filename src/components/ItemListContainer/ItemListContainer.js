import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = (props) => {
	//Función que será usada por el contador
	const onAdd = (cantidad) => {
		console.log(cantidad);
	};
	return (
		<>
			<div className="greeting-container">
				<h2 className="greeting-message">{props.greeting}</h2>
			</div>
			<ItemCount stock={5} initial={1} onAdd={onAdd} />
		</>
	);
};

export default ItemListContainer;
