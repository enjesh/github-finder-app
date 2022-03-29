import React,{useState,useContext} from 'react'
import { Button, Form } from 'react-bootstrap'
import GithubContext from '../context/github/GithubContext'
import {FaGithub} from 'react-icons/fa'
import  {searchUsers} from '../context/github/GithubAction'

const SearchUsers = () => {
  const [text,setText] = useState("")
  const {users,dispatch} = useContext(GithubContext)

  const handleChange = (e) =>{
    setText(e.target.value)
  }
  const handleSubmit = async (e) =>{
    e.preventDefault()
    if(text === ""){
      alert("enter user name");
    }else{
      dispatch({type:"SET_LOADING"})
      const users= await searchUsers(text) 
      dispatch({type:"GET_USERS",payload:users}) 

      setText('')

    }
  }
  return (
    <div className="search-sect mt-4">
    <div className="form-sect">
    <Form onSubmit={handleSubmit}>
      <Form.Control type="text" 
      placeholder="Search Github User"
      value={text}
      onChange={handleChange}
      />
      <Button variant="primary" type="submit" className="btn-search">
      <FaGithub /> {" "}
      Go
      </Button>
    </Form>
    </div>
    {users.length > 0 && (
    <div className="clear-sect">
      <Button variant="outline-primary" onClick = {()=>dispatch({type:"CLEAR_USERS"})}>Clear</Button>
    </div>

    )}
    
    </div>
  )
}

export default SearchUsers