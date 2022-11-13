import { useEffect, useState } from 'react';
import { data } from '../../data/data';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
	const [productSelec, setProductSelec] = useState();
	const getProduct = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(data);
		}, 2000);
	});

	useEffect(() => {
		getProduct.then((response) => {
			setProductSelec(response[0]);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <div>{productSelec && <ItemDetail product={productSelec} />}</div>;
};

export default ItemDetailContainer;
