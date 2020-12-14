import React from 'react';
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
            <div className="container">
                <Link to="/contact/add" className="navbar-brand">Contact Book</Link>
            </div>
            <div>
                <Link to="/contact/add" className="btn btn-danger" >Create Contact</Link>
            </div>

        </nav>
    );
}
export default NavBar;
