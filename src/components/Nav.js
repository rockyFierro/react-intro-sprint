import React from 'react';
import {Link } from 'react-router-dom';
import Nav from "reactstrap/es/Nav";
import NavLink from "reactstrap/es/NavLink";

const Bar = () => {

    return (
        <div>
            <h1>Lambda Eats</h1>
            <Nav tabs>
                <NavLink>
                <Link to="/" data-cy="home">
                    Home
                </Link>
                </NavLink>
                <NavLink>
                <Link to="/Pizza" data-cy="pizza">
                    Order Now
                </Link>
                </NavLink>
            </Nav>
        </div>
    )
}
export default Bar;