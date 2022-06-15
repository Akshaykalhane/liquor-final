import React from "react";
import { Component } from "react";
import '../../styles/placeorder.css';
import Header from "../../../Header";

const url="http://localhost:8210/beerItem";
// const url="https://edu-second-liquor-project-api.herokuapp.com/productItem"
const postData="http://localhost:8210/placeOrder";

class placeOrder extends Component{
    constructor(props){
        super(props)
    let userData=sessionStorage.getItem('userInfo');

        this.state={
            id:Math.floor(Math.random() * 100000),
            product_name:this.props.match.params.productName,
            name:userData?userData.split(',')[0]:'',
            email:userData?userData.split(',')[2]:'',
            phone:userData?userData.split(',')[3]:'',
            address:'savarkar street',
            cost:0,
            productItem:'',
            productImg:'',
            productId:'',
            cateType:'',
            productSize:''
        }
    }


    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    checkout=()=>{
        let obj=this.state;
        obj.productItem=sessionStorage.getItem('beer');
        fetch(postData,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(obj)
        })
        // .then(console.log('order taken'))
        .then(this.props.history.push('/viewOrder'))

    }

    renderMenu=(data)=>{
        if(data){
            return data.map((item)=>{
                return(
                <div className="orderItems" key={item.product_id}>
                    {/* <h2>data not found</h2> */}
                      <img src={item.image} alt={item.name} />
                      <hr />
                        <p className="heading">{item.name}</p>
                        <p className="costhead">Rs. {item.price}</p>
                </div>
                )
            })
        }
    }



    render(){
        if(sessionStorage.getItem('loginStatus')==='loggedOut'){
            return(
                <>
                <Header />
                <center>
                    <h2>Login First To Place Order</h2>
                </center>
                </>
            )
        }
        return(
            <>
            <Header />
                <div className="container">

                    <div className="panel">
                        <div className="panel-heading">
                            <h3>Order Summary</h3>
                        </div>
                        <div className="panel-body">
                        
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label for="name">Name</label>
                                        <input id="name" value={this.state.name} name="name" className="form-control" onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="name">Email</label>
                                        <input id="name" type="email" value={this.state.email} name="name" className="form-control" onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="name">Phone</label>
                                        <input id="name" type="number" value={this.state.phone} name="name" className="form-control" onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="name">Address</label>
                                        <input id="name" value={this.state.address} name="name" className="form-control" onChange={this.handleChange} />
                                    </div>
                                    {this.renderMenu(this.state.productItem)}
                                    <div className="row">
                                    <div className="col-md-12">
                                        <h2>Total Price is Rs. {this.state.cost}</h2>
                                    </div>
                                </div>
                                <button className="btn btn-info" onClick={this.checkout}type="submit">Place Order</button>
                                </div>
                            
                        </div>
                    </div>
                </div>
            </>
        )
    }

    componentDidMount(){

        let productItem=sessionStorage.getItem('beer');
        let orderId=[];
        productItem.split(',').map((item)=>{
            orderId.push(parseInt(item));
            return 'Ok'
        })

        console.log(this.state.product_name , 'product name')
        console.log(this.props.match.params)

        fetch(url,{
            method:"POST",
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(orderId)
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data[0].product_id,'data')
            let totalCost=0;
            data.map((item)=>{
                totalCost+=parseFloat(item.price)
                return 'ok'
            })
            this.setState({cost:totalCost,productItem:data,productImg:data[0].image,productId:data[0].product_id,cateType:data[0].product_category,productSize:data[0].size})
            
        })

    }
}

export default placeOrder;