import React, { Component } from 'react';
import "./shoppingCart.css";


class shoppingCart extends Component {
    state = {  } 
    render() { 
        return (

            <div>
                
                <h1>Warenkorb</h1>
                <h2>Warenkorb</h2>

                {this.state.items.map((item) => {
                    const totalPrice = item.amount * item.price;
                    return (<div key={item.name}> {item.amount} x {item.name} = {totalPrice.toFixed(2)}€  </div>);
                })}

                <h2>Gesamtkosten: {total}€</h2>


            </div>
        );
    }
}
 
export default shoppingCart;