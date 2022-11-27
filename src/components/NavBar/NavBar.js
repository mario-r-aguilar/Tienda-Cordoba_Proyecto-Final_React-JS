/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

export const NavBar = () => {
	return (
		<div className="navbar-container">
			<h1>
				<Link to="/" className="navbar-titulo">
					Tienda Córdoba
				</Link>
			</h1>
			<ul className="navbar-list">
				<li className="navbar-item">
					<Link to="/" className="navbar-item-link">
						Inicio
					</Link>
				</li>
				<li className="navbar-item">
					<Link to="/category/cochecitos" className="navbar-item-link">
						Cochecitos
					</Link>
				</li>
				<li className="navbar-item">
					<Link to="/category/cunas" className="navbar-item-link">
						Cunas
					</Link>
				</li>
				<li className="navbar-item">
					<Link to="/category/sillas" className="navbar-item-link">
						Sillas
					</Link>
				</li>
			</ul>
			<Link to="/cart">
				<CartWidget />
			</Link>
		</div>
	);
};
