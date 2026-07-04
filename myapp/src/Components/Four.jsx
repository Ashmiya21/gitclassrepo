//userlist
import React from 'react'

function Four() {
    const user=[{id:1,name:"ramu"},{id:2,name:"somu"},{id:3,name:"rekha"}]
  return (
    <>
      <h2>UserList</h2>
      <ul>
        {user.map((list)=>(
            <li key={list.id}>{list.name}</li>))}
            
      </ul>
    </>
    
  )
}

export default Four



