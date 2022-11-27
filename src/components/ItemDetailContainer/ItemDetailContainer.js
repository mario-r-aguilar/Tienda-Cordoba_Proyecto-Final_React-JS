import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
	const [productSelec, setProductSelec] = useState();
	const { id } = useParams();

	useEffect(() => {
		const queryDataBase = getFirestore();
		const queryDocument = doc(queryDataBase, 'products', id);
		getDoc(queryDocument)
			.then((response) =>
				setProductSelec({ id: response.id, ...response.data() })
			)
			.catch((error) => console.log(error));
	}, [id]);

	return <div>{productSelec && <ItemDetail product={productSelec} />}</div>;
};

export default ItemDetailContainer;
