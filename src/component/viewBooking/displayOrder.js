import React from "react";
import { Link } from "react-router-dom";

const BookingDisplay = (props) => {

    const renderOrder = ({ orderData }) => {
        if (orderData) {
            return orderData.map((item) => {
                return (
                    <>
                        <div className="in-container">
                            <div className="imgbox">
                                <img src={item.productImg} alt="image" />
                            </div>
                            <div className="content2">
                                <h2>Product Name : {item.product_name}</h2>
                                <h2>Category : {item.cateType}</h2>
                                <h2>Total : {item.cost}</h2>

                                <button className="buttons">
                    <Link to={`/${item.cateType}placeOrder/${item.product_name}`} style={{textDecoration:'none',color:'white'}}>
                                    Buy Again
                    </Link>
                                </button>
                    
                                <button className="buttons">
                                    <Link to={`/${item.cateType}details/${item.productId}`} style={{textDecoration:'none',color:'white'}}>
                                    View Product
                                    </Link>
                                </button>
                            </div>

                        </div>
                    </>
                )
            })

        }
    }

    return (
        <>

            {renderOrder(props)}
        </>
    )
}

export default BookingDisplay;