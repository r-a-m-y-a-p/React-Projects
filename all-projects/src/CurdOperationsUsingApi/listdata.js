
import React,{useEffect,useState} from "react";
import axios from 'axios';
import Addingdata from "./addingdata";
//import  "./style.css";
import Editdata from "./Editingdata";





const apiurl="https://jsonplaceholder.typicode.com/posts"
const ListData = ()=>{
    
     const [data, setData] = useState([])
     console.log(data);
     const Editintialvalues={id:'',userId:'',title:''}
     const[Currentuser,SetCurrentUser]=useState(Editintialvalues)
     const[EditRow,SetEditRow]=useState(false)
     
    useEffect(()=>{
        // axios.get(apiurl).then((data)=>console.log(data))
        axios.get(apiurl).then(jsondata=>setData(jsondata.data)
        )
        
    
    },[]);
    const addChange=(index)=>{
       console.log(index)
        //index.id=index.lenght+1
        setData([...data ,index])
    }
    // const addChange=(index)=>{
    //     setData(...data,index);
    //     console.log(index);
    // }
    const deleteUser = (id)=>{
        setData( data.filter((item) => item.id !== id))}

        const UserEditRow=(user)=>{
            console.log(user)
            SetEditRow(true)
            SetCurrentUser({id:user.id,userId:user.userId,title:user.title})


        }
           const UpdateUser=(id,newuser)=>{
            //console.log(id)
            console.log(newuser)
           // console.log(updateuser)

            SetEditRow(false)
            //setData(data.map((update,index)=>(update.id===index?updateuser:update)))
            setData(data.map((user)=>user.id===Currentuser.id?newuser:user))

        }
    
    return(
        <div className="Listdata">
            <h1>Fetch data from API</h1>
            {EditRow?(<div>
                <h2>EditUser</h2>
                <Editdata currentuser={Currentuser}
            updateuser={UpdateUser}/>
            </div>):(
            <div>
                <h2>Add Users</h2>
            <Addingdata addChange={addChange}/>

            </div>)}
            <br/><br/>



            <table id="users">

                <thead>
                <tr>
                    <th>Id</th>
        
            <th>userId</th>

            <th>Title</th>
            <th>actions</th>
         
          </tr>
                </thead>
                <tbody>
                {/* {data.map((user,i)=>(<tr key={user.userId}> */}
                
                {data.map((user,i)=>(<tr>
                    <td>{user.id}</td>

                    <td>{user.userId}</td>
                    <td>{user.title}</td>
                    <td>
                         <button type="button" onClick={() => deleteUser(user.id)}>Delete</button><br/>
                        <button type="button" onClick={()=>UserEditRow(user,i)}> Update</button>
                      
                    </td>


                    
                </tr>))}
                </tbody>
            </table>

          
        </div>
    )
        
        }
export default ListData;
