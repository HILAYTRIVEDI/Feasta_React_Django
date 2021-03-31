import React from 'react'
import {Link} from 'react-router-dom';
import {Route,Redirect, Switch,BrowserRouter as Router} from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import Contact from './Contact';
import About from './About';
import Cart from './Cart';
import Login from './Login';
import Register from './Register';


function NavMenu() {
    return (
		<Router>
        <div>
            <header className="top-navbar">
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<Link to="/login" className="navbar-brand">
					<img src={require("./images/logo.png").default} alt="" width="50%" height="50%" />
				</Link>
				<div className="collapse navbar-collapse" id="navbars-rs-food">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item"><Link to="/home" className="nav-link">Home</Link></li>
						<li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
						<li className="nav-item"><Link to="/menu" className="nav-link">Menu</Link></li>
						<li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
						<li className="nav-item"><Link to="/cart" className="nav-link"><i class="fab fa-opencart" style={{fontSize:'24px',fontWeight:'800'}}></i></Link></li>
					</ul>
				</div>
			</div>
		</nav>
	</header>
        </div>
			<Switch>
				<Route path="/home"><Home/></Route>
				<Route path="/about"><About/></Route>
				<Route path="/menu"><Menu/></Route>
				<Route path="/contact"><Contact/></Route>
				<Route path="/cart"><Cart/></Route>
				<Route to="/login"><Login/></Route>
				
			</Switch>
		</Router>
    )
}

export default NavMenu
