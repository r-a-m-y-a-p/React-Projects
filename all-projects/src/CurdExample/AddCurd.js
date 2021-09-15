import React, { useState } from "react";
const AddCurd=(props)=>{
    const initialFormState = { id: null, name: '', username: '' }

    const[adduser,setAddUser]=useState(initialFormState)

    const HandleAddUser=(e)=>{
        console.log(e)
        const{name,value}=e.target;
        setAddUser({...adduser,[name]:value})
        // setAddUser(e.target.value)
        console.log(adduser)
    }
    const HandleAddSubmit=(e)=>{
        e.preventDefault()
     if(!adduser.name || !adduser.username) return
     //if(adduser.name && adduser.username) return
     props.Adduser(adduser)
     //console.log(initialFormState)
       setAddUser(initialFormState)
        console.log(adduser)

    }
    return(
        <div>
            <form onSubmit={HandleAddSubmit}>
                  <label>Name</label>
            <input type="text" 
            name="name" 
            value={adduser.name} 
            onChange={HandleAddUser}></input>


            <label>UserName</label>
            <input type="text"
             name="username" 
             value={adduser.username} 
             onChange={HandleAddUser}></input>
             
            <button type="submit">Add NewUser</button>
            </form>

        </div>
    )
}
export default AddCurd;