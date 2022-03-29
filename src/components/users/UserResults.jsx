import React,{useContext} from 'react'
import GithubContext from '../context/github/GithubContext';
import Loader from './Loader';
import UserItem from './UserItem';

const UserResults = () => {
    const {users,loading} = useContext(GithubContext)

    if(!loading){
        return (
          <div className="userList">
             {
                 users.map((user)=>(
                     <UserItem user={user} key={user.id}/>
                 ))
             }
          </div>
        )

    }else{
        return <Loader />
    }
}

export default UserResults