import React ,{Component} from "react";
import axios from "axios";
import '../../styles/listing.css';
import VodkaListingDisplay from './VodkaListingDisplay';
import Header from '../../../Header';

// let cateUrl="http://localhost:8210/catetype?category_id=";
let cateUrl="http://localhost:8210/vodka"
// let cateUrl="https://edu-second-liquor-project-api.herokuapp.com/catetype?category_id=";
class VodkaListing extends Component {
    constructor(props){
        super(props);
        this.state={
            cateList:''
        };
    }
    render(){
        return(

            <>
            <Header />
              <div className="">
                    <div id="mainListing">
                        {/* <div id="filter">
                            <center>
                                <h3>Filter</h3>
                            </center>
                        </div> */}
                        <VodkaListingDisplay cateData={this.state.cateList}/>
                    </div>
                 </div>
        </>
        )
    }
    //api call
    componentDidMount(){
        let cateid=this.props.match.params.cateId;
        console.log(cateid)
        axios.get(`${cateUrl}`)
        .then((res) => {this.setState({cateList:res.data})})
    }
}

export default VodkaListing;