import React, { Component } from "react";
import { Link ,withRouter} from 'react-router-dom';
import './Header.css';

const url = "https://logineduzomato.herokuapp.com/api/auth/userinfo";



class Header extends Component {
    // console.log(this.props)
    constructor(props) {
        super(props);
        this.state = {
            userData:''
        }
    }

    handleLogout = () => {
        sessionStorage.setItem('loginStatus','loggedOut')
        sessionStorage.removeItem('userInfo');
        this.setState({userData:''})
        sessionStorage.removeItem('itk');
        console.log(this.props.history,'history')
        console.log('logout button pressed')
        this.props.history.push('/')
    }

    conditionalHeader = () => {
        if (this.state.userData.name) {
            console.log(this.state.userData)
            let data = this.state.userData;
            let outArray = [data.name, data.name, data.email, data.phone, data.role]
            sessionStorage.setItem('userInfo', outArray);
            sessionStorage.setItem('loginStatus', 'loggedIn')
            return (
                <>
                    <button className="btn2" onClick={this.handleLogout}>LogOut</button>
                </>
            )
        }
        else{
            return(
                <>
                <Link to="/login" ><button className="btn2">Login</button></Link>
                </>
            )
        }
    }

    render() {

        return (
            <nav id="navout">
                <div className="logodiv">
                    <div className="logo"><Link to="/">Liquorr</Link> </div>
                </div>
                <div className="openMenu"><i className="fa fa-bars"></i></div>
                <div id="navbar">
                    <ul className="navul">
                        <li> <Link to="/beer" className="navabtn">Beer</Link> </li>
                        <li> <Link to="/wine" className="navabtn"> Wine</Link></li>
                        <li> <Link to="/vodka" className="navabtn">Vodka</Link></li>
                        <li> <Link to="/whisky" className="navabtn">Whisky</Link></li>
                        <li> <Link to="/rum" className="navabtn">Rum</Link></li>
                        <li> <Link to="/tequila" className="navabtn">Tequila</Link></li>
                        {/* <li><Link to="/"><i className="fa fa-shopping-cart" aria-hidden="true"></i></Link></li>
                        <li><Link to="/"><i className="fa fa-sign-in" aria-hidden="true"></i></Link></li> */}
                    </ul>
                </div>
                <div className="login-div">
                    {/* <Link to="/login" ><button className="btn2">Login</button></Link> */}
                    {this.conditionalHeader()}
                </div>
            </nav>
        );
    }

    componentDidMount(){
       fetch(url,{
           method:'GET',
           headers:{
               'x-access-token':sessionStorage.getItem('ltk')
           }
       })
       .then((res)=>res.json())
       .then((data)=>{
           this.setState({userData:data})
       })

    }


}

export default withRouter(Header);