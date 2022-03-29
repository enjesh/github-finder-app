import React from 'react'
import {Button, Container} from 'react-bootstrap'
import {BiSad} from 'react-icons/bi'
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <Container>
      <div className="error-sect d-flex justify-content-center align-items-center flex-column">
      <div className="error-header">
       <BiSad size={80} />
       <h1>404</h1>
       <span>Page Not Found</span>
      </div>
       <div className="error-main mt-2">
        <Button variant="outline-primary"  size="lg">
        <Link to="/"> Go to Home</Link>
        </Button>
       </div>
      </div>
    </Container>
  )
}

export default NotFound