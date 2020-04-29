import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomeComponent from "./pages/homepage/HomeComponent";

const HatsPage = () => (
    <h1>Hello Home</h1>
);

function App() {
  return (
    <div>
        <Switch>
            <Route exact path='/' component={HomeComponent} />
            <Route path='/hats' component={HatsPage} />
        </Switch>
    </div>
  );
}

export default App;
