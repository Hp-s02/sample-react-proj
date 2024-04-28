import React, { Component } from 'react'
import Header from './Header'

export class Cart extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      cart: [
        {
          name: 'Carrot',
          price: 200,
          quantity: 4
        }
      ]
    }
  }

  render() {
    const {cart} = this.state
    let sum = 0

    for(let i=0; i<cart.length; i++) {
      sum += (cart[i].price*cart[i].quantity)
    }

    return (
      <div>
        <Header />
        <h2>Cart</h2>
        <h3>Bill</h3>
        <table style={{margin: 'auto'}}>
          <tbody>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price of one</th>
            <th>Price</th>
          </tr>
          {
            cart.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity*item.price}</td>
                </tr>
              )
            })
          }
          </tbody>  
        </table>
        <h2>Total Amount: Rs.{sum}.00</h2>
      </div>
    )
  }
}

export default Cart