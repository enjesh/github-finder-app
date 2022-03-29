import React from 'react'
import Spinner from './assets/Loader.gif'
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Loader = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center">
    <img src={Spinner} alt="loading" />
    </Container>
  )
}

export default Loader