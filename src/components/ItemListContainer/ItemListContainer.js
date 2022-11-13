import ItemList from '../ItemList/ItemList';
import { useState, useEffect } from 'react';
import { data } from '../../data/data';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
	const [productList, setProductList] = useState([]);
	const getProducts = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(data);
		}, 2000);
	});

	useEffect(() => {
		getProducts.then((response) => {
			setProductList(response);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [productList]);

	return (
		<div className="containerMsgAndCards">
			<div className="greeting-container">
				<h2 className="greeting-message">{greeting}</h2>
			</div>
			<ItemList productList={productList} />
		</div>
	);
};

export default ItemListContainer;
