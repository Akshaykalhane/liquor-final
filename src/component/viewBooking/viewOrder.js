import React,{Component} from "react";
import Header from "../../Header";
import axios from "axios";
import './viewOrder.css';
import BookingDisplay from "./displayOrder";
import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";

const url="http://localhost:8210/orders";

class ViewOrder extends Component{
    constructor(props){
        super(props);
        this.state={
            orders:''
        }
    }

    render(){
       
        if(sessionStorage.getItem('loginStatus')==='loggedOut'){
            return(
                <>
                    <Header />
                    <center>
                        <h2>Login First To Check Orders</h2>
                    </center>
                </>
            )
        }
        return(
            <>
            <Header />
            <div className="newcontainer">
            <h1>Your Order</h1>
            <BookingDisplay orderData={this.state.orders}  />
            </div>
            </>
        )
    }
    componentDidMount(){
       let email=sessionStorage.getItem('userInfo').split(',')[2];
       axios.get(`${url}?email=${email}`)
        .then((res)=>{this.setState({orders:res.data})})
    }
}

export default ViewOrder;