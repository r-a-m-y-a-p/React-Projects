import React, { useState } from "react";
import CurdTable from "./CurdTable";
import AddCurd from "./AddCurd";
import EditCurd from "./EditCurd";
const Curd=()=>{
const userData=[
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  
]
const[users,setUsers]=useState(userData)

const[Editing,setEditing]=useState(false)
const IntialEditForm={id:"",name:"",username:""}
const[CurrentUser,SetCurrentUser]=useState(IntialEditForm)

const HandleAddUser=(e)=>{
  console.log(e)
//e.tes=users.length+1;
setUsers([...users,e])
}
const EditUser=(i)=>{
  setEditing(true)
  SetCurrentUser({id:i.id,name:i.name,username:i.username})
}
const UpdateEdit=(id,updateuser)=>{
  console.log(id)
  console.log(updateuser)
setEditing(false)
setUsers(users.map((user)=>(user.id===id?updateuser:user)))

}
const DeleteHandler=(indexvalue)=>{
  const newtodo=users.filter((item,index1)=>index1 !==indexvalue)
  setUsers(newtodo)

}
// const DeleteUser=(id)=>{
//   const newtodo=users.filter(index1=>index1.id!==id)
//   setUsers(newtodo)
//   console.log(newtodo)

// }
// const DeleteUser=(index)=>{
// users.filter((item)=>item.index!==index)
// setUsers(users)
// }

    return(
        <div className="container">
            <h2>CURD OPERATIONS USING REACT HOOKS</h2>
            
            <div className="flex-row">
        
          {Editing?(<div className="flex-large">
          <h2>Edit Users</h2>
          <EditCurd currentuser={CurrentUser}//for intial values
          seteditting={setEditing}//for cancel button
          updateuser={UpdateEdit}
          />
        </div>):(<div>
          <h2>Add user</h2>
          <AddCurd Adduser={HandleAddUser}/>

        </div>)}
      
        <div className="flex-large">
          <h2>View users</h2>
          <CurdTable user={users} edituser={EditUser}deleteuser={DeleteHandler}/>
        </div>
        
        
        
      </div>

        </div>

    )
}
export default Curd;