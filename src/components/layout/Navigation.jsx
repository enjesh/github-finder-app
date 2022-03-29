import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'
import {FaGithub} from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css'
import {NavLink,Link} from 'react-router-dom'

const Navigation = () => {
  return (
    <nav>
      <Navbar variant="dark" className="shadow-lg navbg">
      <Container>
      <Navbar.Brand>
      <FaGithub color="white"/>{' '}
       <Link to="/" className="brand-text">Github Finder</Link>
      </Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="mr-auto">
         <Nav.Link><NavLink to="/" activeClassName>Home</NavLink></Nav.Link>
          <Nav.Link> <NavLink to="/about" >About</NavLink></Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    </nav>
  )
}

export default Navigation