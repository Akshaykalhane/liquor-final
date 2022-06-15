import React,{ Component } from 'react';
import '../../styles/details.css';
import axios from 'axios';
import Header from '../../../Header';

//const url = "https://edu-second-liquor-project-api.herokuapp.com/details";
const url="http://localhost:8210/winedetails";
class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details:'',
            userItem:''
        }
    }

    addToCart=(data)=>{
        this.setState({userItem:data})
    }
    orderId=[];

    proceed=()=>{
        let item=sessionStorage.setItem('wine',this.state.details.product_id)
        this.orderId.push(item)

        console.log('item added');
        this.props.history.push(`/wineplaceOrder/${this.state.details.name}`)
    }


    render() {
        let { details } = this.state
        // console.log(this.props.location.search.split('/')[1],'location')
        return (
            <>
            <Header />
            <div className='container'>

                <div id="product">
                    <div className="product-img">
                        <img src={details.image} alt={details.name} />
                    </div>
                    <div className="product-info">
                        <h2 className="product-name">{details.name}</h2>
                        <h3 className="cate">{details.product_category}</h3>
                        <p className="rating">Rating: {details.rating}</p>
                        <p className="text">
                            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis inventore molestiae officiis vero non odio eaque in. Alias error necessitatibus enim amet blanditiis, laborum veritatis! */}
                            {details.description}
                        </p>

                        <p id="size">
                            {details.size}
                        </p>
                        <p className="price">{details.price}</p>
                        <button className="btn" onClick={this.proceed}>Buy Now</button>
                        <button className="btn">Buy Now</button>
                    </div>
                </div>
            </div>
            </>
        )
    }

    async componentDidMount() {
        // let restid = this.props.location.search.split('/')[1];
        // let cateId=this.props.params.match
        let restid=this.props.match.params.cateId;
        // let cateid=this.props.match.params.cateId;
        // let restid=1;
        let response = await axios.get(`${url}/${restid}`)
        console.log(response,'response')
        console.log(`${url}/${restid}`)
        console.log(restid)
        this.setState({ details: response.data[0]})
    }
    // async componentDidMount(){
    //     // let cateid=this.props.location.search.split('')
    //     let productId=this.props.details.product_id;
    //     console.log(productId)
    //     let response=await axios.get(`${url}`)
    //     this.setState({details:response.data[0]+1})
    // }
}



export default Details;