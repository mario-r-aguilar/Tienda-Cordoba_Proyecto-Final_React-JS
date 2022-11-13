import { NavBar } from './components/NavBar/NavBar';
//import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './App.css';

function App() {
	return (
		<>
			<NavBar />
			{/* <ItemListContainer greeting="Bienvenidos a Tienda Córdoba!" /> */}
			<ItemDetailContainer />
		</>
	);
}

export default App;
