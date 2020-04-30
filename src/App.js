import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Header from "./components/header/header.component";
import HomeComponent from "./pages/homepage/HomeComponent";
import ShopComponent from "./pages/shoppage/shop.component";
import SignInAndSignUpComponent from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

function App() {
  return (
    <div>
        <Header />
        <Switch>
            <Route exact path='/' component={HomeComponent} />
            <Route path='/shop' component={ShopComponent} />
            <Route path='/signin' component={SignInAndSignUpComponent} />
        </Switch>
    </div>
  );
}

export default App;
