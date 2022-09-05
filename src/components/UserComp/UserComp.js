import React from 'react'
import { User } from '../User/User'
import { useEffect, useState} from 'react'

export const UserComp = ({users, counter}) => {
  useEffect(() => {
    document.title = `${counter} users left`
    console.log(counter)

  
  }, [users])
  
  return (
    <>

        {  users.map( user =><User user={user} key={user.id}/>)}
        
    </>
  )
}
