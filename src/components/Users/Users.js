import { useEffect, useState } from "react"

import { User } from "../User/User.js"
import { UsersCount } from "../UsersCount/UsersCount"

import './Users.css'

const generateUsers = ()=>{
    return ([
    {id:1, name:'armaz', lastname:'avaliani', age:20},
    {id:2, name:'gvanca', lastname:'beridze', age:19},
    {id:3, name:'luka', lastname:'devdariani', age:20},
    {id:4, name:'nukri', lastname:'qurdiani', age:21},
    {id:5, name:'shako', lastname:'siordia', age:27},
    {id:6, name:'tornike', lastname:'goradze', age:29},
    {id:7, name:'tiko', lastname:'kaxidze', age:32},
    {id:8, name:'giorgi', lastname:'kalashovi', age:34},
    {id:9, name:'temo', lastname:'klidiashvili', age:30},
    {id:10, name:'dali', lastname:'davitadze', age:22}
 
])
}


const Users = () => {

    const [users, SetUsers] = useState([])
    
    const handleRandom = ()=> {
      let n =  Math.floor(Math.random() * users.length)
      SetUsers(users.filter((item,index)=> index !== n))
      console.log('random',n)
     

    }
    const fillUsers = ()=>{
      SetUsers(generateUsers())
    }
   
    console.log('users before useeffect',users)

    useEffect(
        ()=>{
          
            SetUsers(generateUsers())
            console.log('didmount')

        },[]
    )
    console.log('users after use effect',users)
 
  return (
    <div className="users" >
      <UsersCount userslist={users} /> 
      <div className="usersWrapper">
        {!users.length?   <h1>There are no users left to delete them, Fill the Userlist by clicking 'Fill users'</h1>:
         users.map(item => <User className='user'  user={item} key={item.id} />  )}
      </div>
     
    <button className="btn btn-delete" onClick={handleRandom}>Delete Random User</button>
    <button className="btn btn-fill" onClick={fillUsers}>Fill Users</button>
      
    </div>
  )
}

export default Users