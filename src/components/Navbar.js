import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <div className="textLeft">
                    <span>Shop</span>
                    <span>Read</span>
                    <span>Store</span>
                    <span>Search</span>
            </div>
            <div className="textRight">
                    <span>Login</span>
                    <span>Cart</span>
            </div>
        </div>
    )
}

export default Navbar
