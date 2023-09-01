import React, { Component } from 'react';
import Product from '../product';
import "./shop.css";
import ShoppingCart from '../shoppingCart/shoppingCart';

class Shop extends Component {
    state = {
        items: []
    }

    addItem = (amount, name, price) => {
        let currentItems = this.state.items;

        let existingItem = this.state.items.find(item => item.name === name);
        if (existingItem) {
            existingItem.amount++;
        } else {
            currentItems.push({
                amount,
                name,
                price
            });
        }
        this.setState({ items: currentItems });
    }

    calculateTotal() {
        return this.state.items.reduce((acc, item) => acc + (item.amount * item.price), 0).toFixed(2);
    }
    


    render() {

        const total = this.calculateTotal();

        return (
            <div className='shopping-cart'>

                <div className='sec-container'>
                    <div className='product-container'>
                        <Product onAdd={() => this.addItem(1, 'Tomaten', 2.99)} image="tomatoes.jpg" title="Tomaten" description="beschreibung des produktes ist offensichtlich hier!" />
                        <Product onAdd={() => this.addItem(1, 'Gurken', 1.99)} image="cucumbers.jpg" title="Gurken" description="beschreibung des produktes ist offensichtlich hier!" />
                        <Product onAdd={() => this.addItem(1, 'Äpfel', 3.99)} image="apples.jpg" title="Äpfel" description="beschreibung des produktes ist offensichtlich hier!" />
                        <Product onAdd={() => this.addItem(1, 'Birnen', 4.99)} image="pears.jpg" title="Birnen" description="beschreibung des produktes ist offensichtlich hier!" />
                    </div>
                </div>


                <ShoppingCart />


              

            </div>

        );
    }
}

export default Shop;