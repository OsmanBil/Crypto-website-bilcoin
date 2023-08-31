import React, { Component } from 'react';

class ShoppingCard extends Component {
    state = { 
        items: [
            {
                amount: 1,
                name: 'Tomaten',
                price: 1.99
            },
            {
                amount: 2,
                name: 'Äpfel',
                price: 2.99
            }
        ]

    }
    render() {
        return (
            <div className='shopping-cart'>
                <h1>Warenkorb</h1>
                <h2>Warenkorb</h2>
              
                { this.props.items.map((item) => (<div key={item.name}> {item.amount} x {item.name} {item.price}€  </div> ))}

            </div>
        );
    }
}

export default ShoppingCard;