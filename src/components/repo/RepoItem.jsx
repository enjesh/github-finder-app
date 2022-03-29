import React from 'react'
import { Badge, Card } from 'react-bootstrap'
import {FaLink,FaInfo,FaStar,FaEye,FaUtensils} from 'react-icons/fa'
const RepoItem = ({repo}) => {

    const {
        name,
        description,
        html_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_count
    } = repo
  return (
    <div className="w-600 mt-1">
    <Card className="card_item_repo">
     <Card.Body>
      <Card.Title>
      <a href={html_url}>
       <FaLink />{" "} {name}
      </a>
      </Card.Title>
      <p className="mb-3">{description}</p>
       <Badge bg="primary">
       <FaEye />{" "} {watchers_count}
       </Badge>{" "}
        <Badge bg="success">
       <FaStar />{" "} {stargazers_count}
       </Badge>{" "}
        <Badge bg="warning">
       <FaInfo />{" "} {open_issues}
       </Badge>{" "}
        <Badge bg="info">
       <FaUtensils />{" "} {forks}
       </Badge>{" "}
     </Card.Body>
    </Card>
    </div>
  )
}

export default RepoItem