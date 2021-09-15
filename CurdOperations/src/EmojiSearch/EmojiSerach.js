import React, { useEffect, useState } from "react";
import EmojiData from './Emoji.json';
const EmojiSearch=()=>{
    const[Data,setData]=useState('');
    const[Search,SetSearch]=useState([])
    const HandleOnchangeData=(e)=>{
        setData(e.target.value)
        console.log(Data);

    }
    useEffect(()=>{
        console.log(Data)
        const newData=EmojiData.filter(item=>item.title.toLowerCase().includes(Data.toLowerCase()))
        SetSearch(newData)

    },[Data])
    return(
        <div>         
           <center>
            
            <h2 className="card-title">Emoji Search</h2>
            <input type="text" name="Data" value={Data} onChange={HandleOnchangeData}/>
            
        </center>
        {Search.map((i)=><div>
            <div className="card">
                <div className="card-body" onClick={()=>{navigator.clipboard.writeText(i.symbol);alert("Emoji copy")}}>
                    {i.symbol}{i.title}
                </div>
            </div>
        </div>)}

        {/* {EmojiData.map((emoji)=><li>{emoji.symbol}{emoji.title}</li>)} */}
        
        </div>
    )
}
export default EmojiSearch;