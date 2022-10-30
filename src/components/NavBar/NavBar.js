import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

export const NavBar = () => {
	return (
		<div className="navbar-container">
			<h1 className="navbar-titulo">Tienda Córdoba</h1>
			<ul className="navbar-list">
				<li className="navbar-item">
					<a href="#" className="navbar-item-link">
						Inicio
					</a>
				</li>
				<li className="navbar-item">
					<a href="#" className="navbar-item-link">
						Sobre Nosotros
					</a>
				</li>
				<li className="navbar-item">
					<a href="#" className="navbar-item-link">
						Productos
					</a>
				</li>
				<li className="navbar-item">
					<a href="#" className="navbar-item-link">
						Contacto
					</a>
				</li>
			</ul>
			<CartWidget />
		</div>
	);
};
