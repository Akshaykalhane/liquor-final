import React, { Component } from "react";
import Header from "../../Header";
import { Link } from "react-router-dom";
import './register.css'

const url = "https://logineduzomato.herokuapp.com/api/auth/register";

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            phone: ''
        }


    }

handleChange=(event)=>{
    this.setState({[event.target.name]:event.target.value})
    console.log(event)
}

handleSubmit=()=>{
    fetch(url,{
        method:'POST',
        headers:{
            'accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(this.state)
    })
    .then(this.props.history.push('/'))
}


    render() {
        return (
            <>
                <Header />
                <div className="register-box container1">
                    <div className="form-head headsec1">
                        <h2 className="main-head conthead1">Register</h2>
                    </div>
                    <div className="input-box formdiv1">
                        <form action="" className="form-box1">
                            <input type="text" placeholder="Name" name="name" required onChange={this.handleChange} />
                            <input type="number" placeholder="Mobile Number" name="phone" required  onChange={this.handleChange} />
                            <input type="email" placeholder="Email" required name="email"  onChange={this.handleChange} />
                            <input type="password" placeholder="Password" required name="password" onChange={this.handleChange} />
                            <button type="submit" class="reg-btn" onClick={this.handleSubmit}>Register</button>
                        </form>
                        <p className="fill-info">Already have an account? <Link to={'/login'}>Login here!</Link></p>
                    </div>
                </div>
            </>
        )
    }
}

export default Register;