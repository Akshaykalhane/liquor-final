import React from "react";
import { Link } from "react-router-dom";

const QuickDisplay=(props)=>{
    const listCate=({cateData})=>{
        if(cateData){
            return cateData.map((item)=>{
                return(
                    <Link to={`/listing/${item.category_id}`} key={item._id}>
                        <div className="tileContainer">
                            <div className="tileComponent1">
                                <img src={item.image} alt={item.name}/>
                            </div>
                            <div className="tileComponent2">
                                <div className="componentHeading">
                                    <span>{item.name}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }
    return(
        <>
        {listCate(props)}
        </>
    )
}

export default QuickDisplay;