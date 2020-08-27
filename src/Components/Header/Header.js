import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {
    const cart = props.cart;
    // console.log(cart)

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        total = total + course.fee;        
    }

    return (
        <div className="header">
            <div className="menu-bar">                
                <a href="/Home">Home</a>
                <a href="../Course">Courses</a>
                <a href="/Contact">Contact</a>
            </div>

            <div className="shopping-cart">
                <span><FontAwesomeIcon icon={faShoppingCart} /> {cart.length} | ${total.toFixed(2)}</span>
            </div>
        </div>
    );
};

export default Header;