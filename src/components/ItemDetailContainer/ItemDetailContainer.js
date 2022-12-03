import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from '../Spinner/Spinner';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
	const [productSelec, setProductSelec] = useState();
	const { id } = useParams();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const queryDataBase = getFirestore();
		const queryDocument = doc(queryDataBase, 'products', id);
		getDoc(queryDocument)
			.then((response) =>
				setProductSelec({ id: response.id, ...response.data() })
			)
			.then(() => setLoading(false))
			.catch((error) => console.log(error));
	}, [id]);

	return (
		<>
			{loading ? (
				<div className="spinnerContainer">
					<div className="spinner">
						<Spinner />
					</div>
				</div>
			) : (
				<div>{productSelec && <ItemDetail product={productSelec} />}</div>
			)}
		</>
	);
};

export default ItemDetailContainer;
