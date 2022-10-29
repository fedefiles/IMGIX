import * as React from 'react';
import { Container, Row, Navbar, Button, Text, Card, Radio } from "@nextui-org/react";
import { Link} from 'react-router-dom';
import Main from './Main';
export default function App() {
  return (
    <Container>
    <Card css={{ $$cardColor: '$colors$primary' }}>
      <Card.Body>
        <Row justify="center" align="center">
          <Text h6 size={15} color="white" css={{ m: 0 }}>
          <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/rotate'>Rotate</Link></li>
          <li><Link to='/adjust'>Adjust</Link></li>
        </ul>
        
              
          </Text>
        </Row>
      </Card.Body>
    </Card>
    <Main /> 
  </Container>
  
  )
};