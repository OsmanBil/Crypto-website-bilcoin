import React from 'react';
import "./shoppingCart.css";

const ShoppingCart = ({ items }) => {
    const total = items.reduce((acc, item) => acc + (item.amount * item.price), 0).toFixed(2);
    return (
        <div className='shopping-card-container'>
            <h2>Shopping cart</h2>
            {items.map((item) => {
                const totalPrice = item.amount * item.price;
                return (<div key={item.name}> {item.amount} x {item.name} = {totalPrice.toFixed(2)}€  </div>);
            })}
            <h2>Gesamtkosten: {total}€</h2>
        </div>
    );
}

export default ShoppingCart;
