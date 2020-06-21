import React, {useState} from "react";
import {Route, Switch, } from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import Form from './components/Form';
import Order from './components/Order';
import {
    Jumbotron,
    Container
}from 'reactstrap';

const App = () => {
    return (
        <Jumbotron>
            <div className="nav-links">
                <Nav />
            </div>
            <Container>
                <Switch>
                    <Route path="/Order" component="Order">
                        <Order />
                    </Route>
                    <Route path="/Pizza" component="Form">
                        <Form />
                    </Route>
                    <Route path="/" component="Home">
                        <Home />
                    </Route>
                </Switch>
            </Container>
        </Jumbotron>
    );
};
export default App;