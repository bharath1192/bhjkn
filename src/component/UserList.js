import React from "react";
import './userlist.css'
import {members} from '../data.json'
import OpenModal from "./OpenModal";



export default function UserList() {


  return (
    <div className="App" >
       <table id="users">
          <thead>
            <tr>
            <th>UserName</th>
            {/* <th>Activities</th> */}
            </tr>
          </thead>
          
    {members.map(users=>(
        
          <tbody  key={users.id}>
            {console.log(users.activity_periods)}
            <tr>
            {/* <td>{users.real_name}</td> */}
            <td> <OpenModal activity = {users}/></td>
            </tr>
          </tbody>      
    ))}
    </table>
    </div>
  );
}
