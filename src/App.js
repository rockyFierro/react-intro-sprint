import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
const App = () => {
  return (
    <>
      <Nav/>
      <h1>Lambda Eats</h1>
      <Route>
        <Home/>
      </Route>
    </>
  );
};
export default App;
