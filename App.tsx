import * as React from 'react';
import { Container, Row, Navbar, Button, Text, Card, Radio, Spacer, Col } from "@nextui-org/react";
import { Link} from 'react-router-dom';
import Main from './Main';
import Rotate from './Rotate';
export default function App() {
  return (
    <Container>
      <Row>
      <Card css={{ $$cardColor: '$colors$primary' }}>
    <Card.Body>
      <Row justify="center" align="center">
      <Col>
            <Button> <Link to='/'>Home</Link></Button>
            </Col>
            <Col>
            <Button> <Link to='/rotate'>Rotate</Link></Button>
            </Col>
            <Col>
            <Button> <Link to='/adjust'>Adjust</Link></Button>
            </Col>
      </Row>
    </Card.Body>
    </Card>
      <Card css={{ $$cardColor: '$colors$neutral' }}>
      <Card.Body>
           
            <Col>
            <Button> <Link to='/'>Home</Link></Button>
            </Col>
            <Col>
            <Button> <Link to='/rotate'>Rotate</Link></Button>
            </Col>
            <Col>
            <Button> <Link to='/adjust'>Adjust</Link></Button>
            </Col>
                
      </Card.Body>
      
      </Card>
      </Row>
  
    <Spacer y={1} />
    <Main /> 
  </Container>
  
  )
};