import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Card from "./card";
import axios from "axios";

const Shop=()=>{
    const[item,setItem]=useState([]);
    const[Cart,setCart]=useState([])
    useEffect(()=>{
        axios.get(`https://gist.githubusercontent.com/dpetersen/1237910/raw/6ceb2161f756d4b4d5c22754d1ed8d869249f186/product_grid.js`)
        .then((res)=>{
            const{CO,WI}=res.data;
            const newData=[...CO,...WI]
            const dataWithId=newData.map((item,i)=>{
                return {
                    ...item,
                    id:i,
                    price:Math.floor(Math.random()*6)+1
                }
            })
            setItem(dataWithId)
        })
        
        
    },[])
    const isItemInCart=(id)=>{
        const theItem=Cart.filter(item=>item.id===id);
        return theItem.length
    }

    const addToCart=(item)=>{
        if(isItemInCart(item.id)){
            const updateditem=Cart.map(im=>{
                if(im.id === item.id){
                    return {...im, quantity:im.quantity+1}
                }else{
                    return im;
                }
            })
            setCart(updateditem)

        }else{

        const newitem=([...Cart,{...item,quantity:1}])
        setCart(newitem)
    }
}
const RemovefromCart=(id)=>{
    const newcart=Cart.filter(i=>i.id !== id)
    setCart(newcart)
}
    
    return(
        <div>
             <Navbar cart={Cart}/>
    <div className="container">
   <div className="row">
       {item.map((card) => <div key={card.id}className="col col-xs-4">
           <Card data={card} 
             addtocart={addToCart}
             incart={isItemInCart(card.id)}
             removeitem={RemovefromCart}/></div>)}
       </div>
       
        </div>

    </div>

    )
}
export default Shop;