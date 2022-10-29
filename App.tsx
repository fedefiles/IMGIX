import * as React from 'react';
import { Container, Row, Navbar, Button, Text, Card, Radio, Spacer } from "@nextui-org/react";
import { Link} from 'react-router-dom';
import Main from './Main';
export default function App() {
  return (
    <Container>
    <Card css={{ $$cardColor: '$colors$gradient' }}>
      <Card.Body>
        <Row justify="center" align="center" display="flex">
            <Button> <Link to='/'>Home</Link></Button>
            <Button> <Link to='/rotate'>Rotate</Link></Button>
            <Button> <Link to='/adjust'>Adjust</Link></Button>
        </Row>
      </Card.Body>
    </Card>
    <Spacer y={1} />
    <Main /> 
  </Container>
  
  )
};