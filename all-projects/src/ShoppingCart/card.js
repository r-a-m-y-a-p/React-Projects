import React from "react";

const Card=(props)=>{
    const data=props.data;
    return(
        <div className="card" style={{width: "18rem"}}>
  <img src={data['product-image-url']} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{data['product-name']}</h5>
    <p className="card-text">${data.price}</p>

    <button onClick={()=>props.addtocart(props.data)} className="btn btn-primary">AddToCart</button>
{props.incart?<button  onClick={()=>props. removeitem(props.data.id)}className="btn btn-danger">RemoveFromCart</button>:null}

  </div>
</div>
    )
}
export default Card;