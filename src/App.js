import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import Header from "./components/header/header.component";
import HomeComponent from "./pages/homepage/HomeComponent";
import ShopComponent from "./pages/shoppage/shop.component";
import SignInAndSignUpComponent from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth} from './firebase/firebase.utils';

class App extends React.Component {
    state = {
        currentUser: null
    };

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({ currentUser: user })

            console.log(user);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path='/' component={HomeComponent}/>
                    <Route path='/shop' component={ShopComponent}/>
                    <Route path='/signin' component={SignInAndSignUpComponent}/>
                </Switch>
            </div>
        );
    }
}

export default App;
