import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import {
	getFirestore,
	collection,
	getDocs,
	query,
	where,
} from 'firebase/firestore';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
	const [productList, setProductList] = useState([]);
	const { categoryId } = useParams();

	useEffect(() => {
		const queryDataBase = getFirestore();
		const queryCollection = collection(queryDataBase, 'products');
		if (categoryId) {
			const queryCollectionFilter = query(
				queryCollection,
				where('category', '==', 'categoryId')
			);

			getDocs(queryCollectionFilter).then((response) =>
				setProductList(
					response.docs.map((product) => ({
						id: product.id,
						...product.data(),
					}))
				)
			);
			//.catch((error) => console.log(error));
		} else {
			getDocs(queryCollection)
				.then((response) =>
					setProductList(
						response.docs.map((product) => ({
							id: product.id,
							...product.data(),
						}))
					)
				)
				.catch((error) => console.log(error));
		}
	}, [categoryId]);

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
