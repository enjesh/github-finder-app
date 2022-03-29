import React from 'react'
import {Container} from 'react-bootstrap'
import SearchUsers from '../components/users/SearchUsers'
import UserResults from '../components/users/UserResults'


const Home = () => {
  return (
    <Container>
     <div>
     <SearchUsers />
     {process.env.GITHUB_URL_API}
     </div>
     <UserResults />
    </Container>
  )
}

export default Home