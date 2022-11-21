import { cartContext } from './context/cartContext/cartContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { NavBar } from './components/NavBar/NavBar';
import './App.css';

function App() {
	return (
		<cartContext.Provider value={[]}>
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
						element={
							<ItemListContainer greeting="Gracias por elegirnos!" />
						}
					/>
					<Route path="/item/:id" element={<ItemDetailContainer />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</BrowserRouter>
		</cartContext.Provider>
	);
}

export default App;
