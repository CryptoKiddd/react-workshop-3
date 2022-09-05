
import { useEffect } from 'react';
import './User.css'
export const User = ({ user }) => {
  useEffect(
    ()=>{
   
  },[]
  )
  return (
    <div className="userWrapper" >
     
      
          <p>Name: {user.name}</p>
          <p>Lastname: {user.lastname}</p>
          <p>Age: {user.age}</p>
  
      
    </div>
  );
};


