import * as React from 'react';
import { Container, Row, Navbar, Button, Text, Card, Radio, Spacer, Col } from "@nextui-org/react";
import { Link} from 'react-router-dom';
import Main from './Main';
import Rotate from './Rotate';
export default function App() {
  return (
    <Container  >
      <Row justify="center" align="center">
      <Card css={{ $$cardColor: '$colors$primary' }}>
    <Card.Body>
      <Row  align="center">
     
            <Col>
            <Spacer y={1} />  
            <Button 
  auto 
  as="a"
  rel="noopener noreferrer"
  target="_self"
  href="/"
  css={{ 
    maxWidth: '$14', // space[12]
    borderRadius: '$md', // radii.xs
    border: '$space$1 solid transparent',
    background: '$gray800', // colors.gray800
    color: '$gray100',
    height: '$14', // space[12]
    boxShadow: '$md', // shadows.md
    '&:hover': {
      background: '$gray100',
      color: '$gray800',
    },
    '&:active': {
      background: '$gray200',
    },
    '&:focus': {
      borderColor: '$gray400',
    },
  }}
  >
    Home
</Button>
</Col>
            <Col>
            <Button 
  auto 
  as="a"
  rel="noopener noreferrer"
  target="_self"
  href="/rotate"
  css={{ 
    maxWidth: '$14', // space[12]
    borderRadius: '$md', // radii.xs
    border: '$space$1 solid transparent',
    background: '$gray800', // colors.gray800
    color: '$gray100',
    height: '$14', // space[12]
    boxShadow: '$md', // shadows.md
    '&:hover': {
      background: '$gray100',
      color: '$gray800',
    },
    '&:active': {
      background: '$gray200',
    },
    '&:focus': {
      borderColor: '$gray400',
    },
  }}
  >
   Rotate
</Button>
          
            </Col>
            <Col>
            <Button 
  auto 
  as="a"
  rel="noopener noreferrer"
  target="_parent"
  href="/adjust"
  css={{ 
    maxWidth: '$14', // space[142]
    borderRadius: '$md', // radii.xs
    border: '$space$1 solid transparent',
    background: '$gray800', // colors.gray800
    color: '$gray100',
    height: '$14', // space[14]
    boxShadow: '$md', // shadows.md
    '&:hover': {
      background: '$gray100',
      color: '$gray800',
    },
    '&:active': {
      background: '$gray200',
    },
    '&:focus': {
      borderColor: '$gray400',
    },
  }}
  >
   Adjust
</Button>
            </Col>
      </Row>
    </Card.Body>
    </Card>
     
      </Row>
  
    <Spacer y={1} />
    <Main /> 
  </Container>
  
  )
};