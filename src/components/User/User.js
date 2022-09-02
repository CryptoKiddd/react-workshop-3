
import './User.css'
export const User = ({ user }) => {
  return (
    <div className="userWrapper">
     
      
          <p>{user.name}</p>
          <p>{user.lastname}</p>
          <p>{user.age}</p>
  
      
    </div>
  );
};


