import React from 'react'
import { User } from '../User/User'

export const UserComp = ({users}) => {
  return (
    <div>

        {users.map((user) => { <User key={user.id} />}
        
    </div>
  )
}
