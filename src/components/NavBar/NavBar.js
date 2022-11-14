/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

export const NavBar = () => {
	return (
		<div className="navbar-container">
			<h1 className="navbar-titulo">Tienda Córdoba</h1>
			<ul className="navbar-list">
				<li className="navbar-item">
					<NavLink to="/" className="navbar-item-link">
						Inicio
					</NavLink>
				</li>
				<li className="navbar-item">
					<NavLink to="/category/cochecitos" className="navbar-item-link">
						Cochecitos
					</NavLink>
				</li>
				<li className="navbar-item">
					<NavLink to="/category/cunas" className="navbar-item-link">
						Cunas
					</NavLink>
				</li>
				<li className="navbar-item">
					<NavLink to="/category/sillas" className="navbar-item-link">
						Sillas
					</NavLink>
				</li>
			</ul>
			<CartWidget />
		</div>
	);
};
