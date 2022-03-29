import React from 'react'
import {Card} from "react-bootstrap"
import {Link} from "react-router-dom"


const UserItem = ({user}) => {
  return (
   <Card className="user-card shadow-lg">
   <Card.Body>
    <div className="user-card-section">
    <img width={50} src={user.avatar_url} alt="avatar" />
    <div>
    <Card.Title>{user.login}</Card.Title>
    <span><Link to={`/user/${user.login}`}>User Profile</Link></span>
    </div>
    </div>
    
   </Card.Body>
   </Card>
  )
}

export default UserItem