
import './User.css'
export const User = ({ user }) => {
  return (
    <div className="userWrapper" >
     
      
          <p>Name: {user.name}</p>
          <p>Lastname: {user.lastname}</p>
          <p>Age: {user.age}</p>
  
      
    </div>
  );
};


