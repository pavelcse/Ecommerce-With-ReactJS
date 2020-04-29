import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomeComponent from "./pages/homepage/HomeComponent";
import ShopComponent from "./pages/shoppage/shop.component";

function App() {
  return (
    <div>
        <Switch>
            <Route exact path='/' component={HomeComponent} />
            <Route path='/shop' component={ShopComponent} />
        </Switch>
    </div>
  );
}

export default App;
