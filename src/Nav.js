import React from 'react';
import NavMenu from './NavMenu';
import Home from './Home';
import {Route, Switch,BrowserRouter as Router,Link} from 'react-router-dom';


function Nav() {
    return (
        <Router>
            <div>
            <ul>
                <li> <Link Link to="/">Nav Menu</Link></li>
                <li> <Link Link to="/home">Home</Link></li>
            </ul>    
            </div>
            <Switch>
                <Route exact path='/'><NavMenu/></Route>
                <Route exact path='/home'><Home/></Route>
            </Switch>
        </Router>
    )
}

export default Nav
