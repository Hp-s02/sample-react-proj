import React, { Component } from 'react'
import { FaHome, FaRegThumbsUp, FaShoppingCart, FaUser } from 'react-icons/fa';
import NavigateContext from './NavigateContext';

class Header extends Component {
    static contextType = NavigateContext

    goToFeedback = () => {
        this.context('/feedback')
    }

    goToCart = () => {
        this.context('/cart')
    }

    goToHome = () => {
        this.context('/home')
    }

    render() {
        const user = localStorage.getItem('user');
        return (
            <div style={styles.topnav}>
                <span style={styles.menu} onClick={this.goToFeedback}><FaRegThumbsUp />&nbsp;Feedback</span>
                <span style={styles.menu}><FaUser />&nbsp;{user}</span>
                <span style={styles.menu} onClick={this.goToCart}><FaShoppingCart />&nbsp;Shopping Cart</span>
                <span style={styles.menu} onClick={this.goToHome}><FaHome />&nbsp;Home</span>
            </div>
          )
    }
}

const styles = {
    topnav: {
        overflow: 'hidden',
        backgroundColor: '#333'
    },
    menu: {
        float: 'right',
        color: '#f2f2f2',
        textAlign: 'center',
        padding: '14px 16px',
        textDecoration: 'none',
        fontSize: '17px'
    }
}

export default Header