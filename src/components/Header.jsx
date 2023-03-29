import React ,{useState, useContext} from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import MyOrder from '../containers/MyOrder';
import MenuMobile from '@components/MenuMobile';
import  menu from '@icons/icon_menu.svg';
import  logo from '@logos/logo_yard_sale.svg';
import  shoppingCart from '@icons/icon_shopping_cart.svg';

import AppContext from '../context/AppContext';

const Header = () => {
	const { state, menuToggle, ordersToggle, menuMobileToggle } = useContext(AppContext);

	const handleToggleMenu = () => {
		menuToggle();
	}
	const handleToggleOrder = () => {
		ordersToggle();
	}
	const handleToggleMobile = () => {
		menuMobileToggle();
	}

	return (
		<nav>
			<img src={menu} alt="menu" className="menu" onClick={() => handleToggleMobile()}/>
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={() => handleToggleMenu()}>
						platzi@example.com
					</li>
					<li className="navbar-shopping-cart" 
					onClick={() => handleToggleOrder()}>
						<img src={shoppingCart} alt="shopping cart" />
						{ state.cart.length > 0 ? <div>{state.cart.length}</div> : null }
					</li>
				</ul>
			</div>
			{/* Valida si se cumple solo con una validacion sino no pasa a la sig */}
			{state.toggleMenu && <Menu />}
			{state.toggleOrders && <MyOrder />}
			{state.toggleMenuMobile && <MenuMobile />}
		</nav>
	);
}

export default Header;
