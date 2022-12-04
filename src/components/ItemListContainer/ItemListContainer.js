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
import Spinner from '../Spinner/Spinner';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
	const [productList, setProductList] = useState([]);
	const { categoryId } = useParams();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const queryDataBase = getFirestore();
		const queryCollection = collection(queryDataBase, 'products');

		const queryCollectionFilter = categoryId
			? query(queryCollection, where('category', '==', categoryId))
			: queryCollection;

		getDocs(queryCollectionFilter)
			.then((response) =>
				setProductList(
					response.docs.map((product) => ({
						id: product.id,
						...product.data(),
					}))
				)
			)
			.then(() => setLoading(false))
			.catch((error) => console.log(error));
	}, [categoryId]);

	return (
		<>
			{loading ? (
				<div className="spinnerContainer">
					<div className="spinner">
						<Spinner />
					</div>
				</div>
			) : (
				<div className="containerMsgAndCards">
					<div className="greeting-container">
						<h2 className="greeting-message">{greeting}</h2>
					</div>
					<ItemList productList={productList} />
				</div>
			)}
		</>
	);
};

export default ItemListContainer;
