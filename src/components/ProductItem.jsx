import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import '../styles/ProductItem.scss';

import add_to_cart from '@icons/bt_add_to_cart.svg';
import added_to_cart from '@icons/bt_added_to_cart.svg';
const ProductItem = ({product}) => {
	const { addToCart, removeFromCart, state } = useContext(AppContext);

	const handleClick = item => {
		itsProductAdded() ? removeFromCart(item) : addToCart(item);
	}

	const itsProductAdded = () => state.cart.some( (item) => item.id === product.id);

	
	
	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					{itsProductAdded() ? 
					( <img src={added_to_cart} alt="" /> ) :
					( <img src={add_to_cart} alt="" />   )}
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
