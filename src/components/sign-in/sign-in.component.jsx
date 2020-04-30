import React, {Component} from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import './sign-in.style.scss';

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })

        //OR
        /*this.setState({
            [event.target.name]: event.target.value
        })*/

    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({
            email:'',
            password: ''
        })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        handleChange={this.handleChange}
                        type="email" name='email'
                        value={this.state.email}
                        label='Email'
                        required
                    />

                    <FormInput
                        handleChange={this.handleChange}
                        type="password"
                        name='password'
                        value={this.state.password}
                        label='Password'
                        required
                    />

                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;