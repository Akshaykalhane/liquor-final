import React from "react";
import { Link } from "react-router-dom";
import { Component } from "react";
import Header from "../../Header";
import './login.css'

const url = "https://logineduzomato.herokuapp.com/api/auth/login";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '@gmail.com',
            password: '1234',
            message: ''
        }

    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value})
        console.log(event.target.value)
    }

    handleSubmit = () => {
        fetch(url, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.auth === false) {
                    this.setState({ message: data.token })
                } else {
                    sessionStorage.setItem('ltk', data.token)
                    this.props.history.push('/')
                }
            })
    }

    render() {
        return (
            <>
                <Header />
                <div className="container1 container">
                    <div className="headsec1">
                        <h2 className="conthead1">Login</h2>
                    </div>
                    <div className="formdiv1">
                        <div className="form-box1">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email"  value={this.state.email} onChange={this.handleChange} required />
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password"  value={this.state.password} onChange={this.handleChange}  required />
                            <div className="btndiv1">
                                <button type="submit" className="login-btn" onClick={this.handleSubmit}>Login</button>
                            </div>
                        </div>
                        <p className="fill-info">Don't have an account? <Link to={'/register'}>Create</Link></p>
                        <p className="fill-info" style={{ color: 'red' }}>{this.state.message}</p>
                    </div>

                </div>
            </>
        )
    }
}

export default Login;