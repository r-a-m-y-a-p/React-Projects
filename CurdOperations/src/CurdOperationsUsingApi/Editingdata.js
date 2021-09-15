import React, { useState } from "react";
const Editdata=(props)=>{
    const[Editdata,setEdit]=useState(props.currentuser)
    const HandleEdit=(e)=>{
        setEdit({...Editdata,[e.target.name]:e.target.value})

    }
    const HandleSubmitEdit=(e)=>{
        e.preventDefault()
        props.updateuser(Editdata.id,Editdata)
        console.log(Editdata)
    }
return(
    <div>
        <form onSubmit={HandleSubmitEdit}>
        <h2>EditUser</h2>
        <input type="text" name="id" value={Editdata.id} onChange={HandleEdit}></input>
        <input type="text" name="userId" value={Editdata.userId} onChange={HandleEdit}></input>
        <input type="text" name="title" value={Editdata.title} onChange={HandleEdit}></input>
        <button type="submit">UpdateUser</button>
        </form>
    </div>
)
}
export default Editdata;