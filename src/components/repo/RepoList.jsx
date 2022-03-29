import React from 'react'
import {Card} from 'react-bootstrap'
import RepoItem from './RepoItem'

const RepoList = ({repos}) => {
  return (
     <Card className="mt-1 card-repo mb-5">
      <Card.Body>
      <Card.Title>Latest Repositories</Card.Title>
       {
           repos.map((repo)=>(
              <RepoItem key={repo.id} repo={repo}/>
           ))
       }
      </Card.Body>
     </Card>
  )
}

export default RepoList