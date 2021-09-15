import React, { useState } from "react";
const Addingdata = (props) => {
 const intialvalue = { id:"",userId:"",title:""};
  const [adduser, setaddUser] = useState(intialvalue)
  console.log(adduser);
  
  const handleIInputChange = (evt) =>{

    //const value = evt.target.value;
    setaddUser({
      ...adduser,
      [evt.target.name]: evt.target.value
    });
  }
  return (
    
      <form 
        onSubmit={(e)=>{e.preventDefault()
          if(!adduser.id || !adduser.userId || !adduser.title) return
           props.addChange(adduser)
          setaddUser(adduser)
          console.log(adduser)
          }
          }>
            <label>Id</label>
            <input type="text" name="id" value={adduser.id} onChange={handleIInputChange}/>

        <label>userId</label>
        <input type="text" name="userId" value ={adduser.userId} onChange={handleIInputChange}/>
        
        <label>title</label>

        <input type="text" name="title" value={adduser.title} onChange={handleIInputChange}/>
        <button type="submit">AddNewUser</button>
      </form>
    
  );
};
export default Addingdata;
