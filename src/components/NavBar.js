import React from 'react';

function NavBar() {
    return (
        <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
            <div className="container">
                <a href="#" className="navbar-brand">Contact Book</a>
            </div>
            <div>
                <a href="#" className="btn btn-danger" >Create Contact</a>
            </div>

        </nav>
    );
}
export default NavBar;
