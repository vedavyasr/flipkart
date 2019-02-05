import React, { Component } from 'react';

class Cart extends Component {
    constructor() {
        super();
        this.state = {
            tableheader: ["Name", "Price", "QTY", "Total", "Remove"],
            products: [{ name: "iphone 5", price: 200, QTY: 2, Total: 400, Remove: 'Remove' },
            { name: "iphonev5s", price: 250, QTY: 1, Total: 250, Remove: 'Remove' },
            { name: "iphone 6", price: 300, QTY: 2, Total: 600, Remove: 'Remove' },
            { name: "iphone 6s", price: 350, QTY: 2, Total: 700, Remove: 'Remove' },
            { name: "iphone x", price: 400, QTY: 2, Total: 800, Remove: 'Remove' }]
        }
    }
    render() {
        return (
            <div className="container">
                <div>
                    <h1>Cart</h1>
                    <table className="table table-hover">
                        <tr>
                            {this.state.tableheader.map(item => (
                                <th key={item}>{item}</th>
                            ))}
                        </tr>
                            {
                                this.state.products.map(item => (
                                    <tr>
                                   <td>{item.name}</td>
                                   <td>{item.price}</td>
                                   <td>{item.QTY}</td>
                                   <td>{item.Total}</td>
                                   <td>{item.Remove}</td>
                                   </tr>
                                )
                                )}                      
                    </table>
                </div>
            </div>
        );
    }
}

export default Cart;