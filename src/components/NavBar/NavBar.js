/* eslint-disable jsx-a11y/anchor-is-valid */
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

export const NavBar = () => {
	return (
		<div className="navbar-container">
			<h1 className="navbar-titulo">Tienda Córdoba</h1>
			<ul className="navbar-list">
				<li className="navbar-item">
					<a href="#" className="navbar-item-link">
						Nuestros Productos
					</a>
				</li>
				<li className="navbar-item">
					<a href="#" className="navbar-item-link">
						Cochecitos
					</a>
				</li>
				<li className="navbar-item">
					<a href="#" className="navbar-item-link">
						Cunas
					</a>
				</li>
				<li className="navbar-item">
					<a href="#" className="navbar-item-link">
						Sillas
					</a>
				</li>
			</ul>
			<CartWidget />
		</div>
	);
};
