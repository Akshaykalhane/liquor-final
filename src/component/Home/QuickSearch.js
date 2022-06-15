import React, { Component } from "react";
import { Link } from "react-router-dom";
import './quicksearch.css';
import QuickDisplay from './QuickDisplay';

// const url="https://edu-second-liquor-project-api.herokuapp.com/categories";
const url = "http://localhost:8210/categories"
class QuickSearch extends Component {
    constructor() {
        super();
        this.state = {
            categoryId: '',
            product1: '',
            product2: ''
        }
    }
    render() {
        let { product1 } = this.state;
        let { product2 } = this.state;
        return (
            <>
                {/* <div className="quickSearch">
                    <span id="QuickSearchHeading">
                        Our Collection
                    </span>
                    <QuickDisplay cateData={this.state.categoryId} />
                </div> */}
                <div className="quick-search">
                    <span id="QuickSearchHeading">Our Collection</span>
                    {/* <div className="tileContainer">
                        <Link to={`/beer`} key={product1._id}>
                            <div className="tileComponent1">
                                <img src={product1.image} alt={product1.name} />
                            </div>
                            <div className="tileComponent2">
                                <div className="componentHeading">
                                    <span>{product1.name}BEER</span>
                                </div>
                            </div>
                        </Link>
                    </div> */}
                    {/* <div className="tileContainer">
                        <Link to={`/wine`} key={product2._id}>
                            <div className="tileComponent1">
                                <img src={product2.image} alt={product2.name} />
                            </div>
                            <div className="tileComponent2">
                                <div className="componentHeading">
                                    <span>{product2.name}WINE</span>
                                </div>
                            </div>
                        </Link>
                    </div> */}


                    <div className="catecon">
                        
                        <Link to={`/beer`} >
                            <div className="catbox">
                                <div className="img">
                                    <img src="https://i.ibb.co/5FK9Ht6/beer.jpg" alt="beer" />
                                </div>
                                <div className="content1">
                                    <h3>BEER</h3>
                                </div>
                            </div>
                        </Link>
                        
                        <Link to={`/rum`}>
                            <div className="catbox">
                                <div className="img">
                                    <img src="https://i.ibb.co/XpZgfc0/rum.jpg" alt="rum" />
                                </div>
                                <div className="content1">
                                    <h3>RUM</h3>
                                </div>
                            </div>
                        </Link>

                        <Link to={`/tequila`}>
                            <div className="catbox">
                                <div className="img">
                                    <img src=" https://i.ibb.co/pfV2NqP/tequila.jpg" alt="tequila" />
                                </div>
                                <div className="content1">
                                    <h3>TEQUILA</h3>

                                </div>
                            </div>
                        </Link>

                        <Link to={`/vodka`}>
                            <div className="catbox">

                                <div className="img">
                                    <img src="https://i.ibb.co/5W7t3Kn/vodka.jpg" alt="vodka" />
                                </div>
                                <div className="content1">
                                    <h3>VODKA</h3>

                                </div>
                            </div>
                        </Link>

                        <Link to={`/whiskey`}>

                            <div className="catbox">
                                <div className="img">
                                    <img src=" https://i.ibb.co/zQGWLm9/whiskey.jpg" alt="whiskey" />
                                </div>
                                <div className="content1">
                                    <h3>WHISKEY</h3>
                                </div>
                            </div>
                        </Link>

                        <Link to={'/wine'}>

                            <div className="catbox">

                                <div className="img">
                                    <img src="https://i.ibb.co/smC64C7/wine.jpg "alt="wine" />
                                </div>
                                <div className="content1">
                                    <h3>WINE</h3>

                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* <img src={product1.image} />
                    <img src={product2.image} /> */}
                </div>
            </>
        )
    }
    //api call
    componentDidMount() {
        fetch(url, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ categoryId: data })
                console.log(data)
                this.setState({ product1: data[0] })
                this.setState({ product2: data[1] })
            })
    }
}

export default QuickSearch;