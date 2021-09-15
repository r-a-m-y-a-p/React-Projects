import React from "react";
const CurdTable=(props)=>{
    return(
        <div>
            <table>
                <thead>
                    <title></title>
                    <tr>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Actions</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {props.user.length>0?(props.user.map((i,index)=>(
                    <tr key={index.id}>
                        <td>{i.name}</td>
                        <td>{i.username}</td>
                        <td>
                        <button onClick={()=>props.edituser(i)}className="button muted-button">Edit</button>
                        <button onClick={() =>props.deleteuser(index)} className="button muted-button">Delete</button>


                        </td>
                        
                    </tr>))):(
                    <tr>
                                  <td colSpan={3}>No users</td>

                        </tr>
                    )}
                </tbody>
            </table>

        </div>
    )
}
export default CurdTable;