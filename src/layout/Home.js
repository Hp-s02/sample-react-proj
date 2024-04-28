import React, { Component } from 'react'
import Header from './Header'

class Home extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      Carrot:1, Tomato: 1, Pumpkin: 1, Brinjal: 1, Potato: 1,
      cart: []
    }

    this.addToCart = this.addToCart.bind(this)
  }

  changeQuantity = (event) => {
    this.setState((prevState) => ({
      [event.target.name]: prevState[event.target.name] + 1
    }))
  }

  addToCart = (event, name) => {
    console.log(this.state);
    console.log(name);
  }

  render() {
    const vegetables = [
      {
        image:'./carrot-icon.png',
        name: 'Carrot',
        price: 200
      },
      {
        image:'./tomato-icon.png',
        name: 'Tomato',
        price: 150
      },
      {
        image:'./pumpkin-icon.png',
        name: 'Pumpkin',
        price: 300
      },
      {
        image:'./brinjal-icon.png',
        name: 'Brinjal',
        price: 180
      },
      {
        image:'./potato-icon.png',
        name: 'Potato',
        price: 100
      }
    ]
    return (
      <div>
        <Header />
        <h2>Vegetables</h2>
        <div style={styles.list}>
          {
            vegetables.map((vegetable, index) => {
              return (
                <div key={index} style={styles.card}>
                  <img src={vegetable.image} alt={vegetable.name} style={styles.image}/>
                  <h3>{vegetable.name}</h3>
                  <p>Rs.{vegetable.price}/kg</p>
                  <label>Quantity: </label>
                  <input type="number" name={vegetable.name} value={this.state[vegetable.name]} onChange={this.changeQuantity}/>
                  <br />
                  <button onClick={() => this.addToCart(vegetable.name)}>Add to Cart</button>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

const styles = {
  list: {
    display: 'flex'
  },
  card: {
    border: '2px solid grey',
    padding: '10px',
    margin: '10px'
  },
  image: {
    height: '200px'
  }
}

export default Home