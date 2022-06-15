import React ,{Component} from "react";
import axios from "axios";
import './listing.css';
import ListingDisplay from './ListingDisplay';

let cateUrl="http://localhost:8210/catetype?category_id=";
// let cateUrl="https://edu-second-liquor-project-api.herokuapp.com/catetype?category_id=";
class Listing extends Component {
    constructor(props){
        super(props);
        this.state={
            cateList:''
        };
    }
    render(){
        return(

            <>
              <div className="">
                    <div id="mainListing">
                        <div id="filter">
                            <center>
                                <h3>Filter</h3>
                            </center>
                        </div>
                        <ListingDisplay cateData={this.state.cateList}/>
                    </div>
                 </div>
        </>
        )
    }
    //api call
    componentDidMount(){
        let cateid=this.props.match.params.cateId;
        console.log(cateid)
        axios.get(`${cateUrl}${cateid}`)
        .then((res) => {this.setState({cateList:res.data})})
    }
}

export default Listing;