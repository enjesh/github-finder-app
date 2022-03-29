import React from 'react'
import {Container,Card,Row,Col} from 'react-bootstrap'
import {FaGithub} from 'react-icons/fa'

const About = () => {
  return (
    <Container>
    <Row>
    <Col></Col>
    <Col xs={10}>
     <Card className="w-100 about-content">
      <div className="about-container">
        <div className="Github-icon">
        <FaGithub size="60" />
        <h2>Github Finder</h2>
        </div>
        <div className="about-text">
         <p>React Application to enable users search Github users 
         and display their stattitics and bios.Easy to use and it renders great user experience.</p>
         <span>This Project is inspired by Traversy Media</span>
        </div>
      </div>
     </Card>
    </Col>
    <Col></Col>
    </Row>
    </Container>
  )
}

export default About