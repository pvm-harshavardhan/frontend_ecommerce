import React, { useContext, useRef, useState } from 'react'
import './Navbar.css';
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import logo from '../Assets/logo1.png'
import { ShopContext } from '../../Context/ShopContext';


const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef();
    
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>LET'S SHOP</p>
            </div>
            {/* <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" /> */}
            <ul ref={menuRef} className="nav-menu">
                <li onClick={() => setMenu("shop")}><Link style={{ textDecoration: "none", color: "#000000" }} to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => setMenu("mens")}><Link style={{ textDecoration: "none", color: "#000000" }} to='/mens'>Men</Link>{menu === "mens" ? <hr /> : <></>}</li>
                <li onClick={() => setMenu("womens")}><Link style={{ textDecoration: "none", color: "#000000" }} to='/womens'>Women</Link>{menu === "womens" ? <hr /> : <></>}</li>
                <li onClick={() => setMenu("kids")}><Link style={{ textDecoration: "none", color: "#000000" }} to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar