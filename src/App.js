import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { NavBar } from './components/NavBar/NavBar';
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route
					path="/"
					element={
						<ItemListContainer greeting="Bienvenidos a Tienda Córdoba!" />
					}
				/>
				<Route
					path="/category/:categoryId"
					element={<ItemListContainer greeting="Gracias por elegirnos!" />}
				/>
				<Route path="/item/:id" element={<ItemDetailContainer />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
