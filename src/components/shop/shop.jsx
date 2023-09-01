import React, { Component } from 'react';
import Coin from "../coin/coin";
import "./shop.css";
import ShoppingCart from '../shoppingCart/shoppingCart';

class Shop extends Component {
    state = {
        items: []
    }

    addItem = (amount, name, price) => {
        let currentItems = [...this.state.items];
        let existingItem = currentItems.find(item => item.name === name);
        if (existingItem) {
            existingItem.amount += amount;
        } else {
            currentItems.push({ amount, name, price });
        }
        this.setState({ items: currentItems });
    }

    deleteItem = (name) => {
        const filteredItems = this.state.items.filter(item => item.name !== name);
        this.setState({ items: filteredItems });
    }

    render() {
        return (
            <div className='shop'>
                <div className='sec-container'>
                    <div className='product-container'>
                        <Coin onAdd={() => this.addItem(1, 'Bitcoin', 25350.00)} image="bitcoin.png" price="25350.00 $" title="Bitcoin" description="Decentralized digital currency, blockchain-based." />
                        <Coin onAdd={() => this.addItem(1, 'Ethereum', 1655.67)} image="ethereum.png" price="1655.67 $" title="Ethereum" description="Smart contracts, decentralized platform." />
                        <Coin onAdd={() => this.addItem(1, 'Litecoin', 64.99)} image="litecoin.jpeg" price="64.99 $" title="Litecoin" description="Faster Bitcoin variant, lighter blockchain." />
                        <Coin onAdd={() => this.addItem(1, 'Bilcoin', 12675.00)} image="bilcoin.png" price="12675.00 $" title="Bilcoin" description="Smarter Ethereum variant, smart blockchain." />
                    </div>
                </div>
                <div className='shopping-cart'>
                    <ShoppingCart items={this.state.items} onDelete={this.deleteItem} />
                </div>
            </div>
        );
    }
}

export default Shop;
