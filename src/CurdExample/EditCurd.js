import React, { useState } from "react";
const EditCurd=(props)=>{
    const[EditUser,SetEdit]=useState(props.currentuser);
    const HandleEdit=(e)=>{
        SetEdit({...EditUser,[e.target.name]:e.target.value})
        console.log(EditUser)

    }
    const HandleEditSubmit=(e)=>{
        e.preventDefault()
        props.updateuser(EditUser.id,EditUser)
        
        console.log(EditUser)
    }

    return(
        <div>
            <form onSubmit={HandleEditSubmit}>
            
            <input type="text" name="name" value={EditUser.name} onChange={HandleEdit}/>
            <input type="text" name="username" value={EditUser.username} onChange={HandleEdit}/>
            <button type="submit">UpdateUser</button>
            <button onClick={()=>props.seteditting(false)} className="button muted-button"
>Cancel</button>
            </form>
        </div>
    )
}
export default EditCurd;

