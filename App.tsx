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
            <Button 
  auto 
  as="a"
  rel="noopener noreferrer"
  target="_self"
  href="/"
  css={{ 
    maxWidth: '$12', // space[12]
    borderRadius: '$xs', // radii.xs
    border: '$space$1 solid transparent',
    background: '$gray800', // colors.gray800
    color: '$gray100',
    height: '$12', // space[12]
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
    maxWidth: '$12', // space[12]
    borderRadius: '$xs', // radii.xs
    border: '$space$1 solid transparent',
    background: '$gray800', // colors.gray800
    color: '$gray100',
    height: '$12', // space[12]
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
  target="_self"
  href="/rotate"
  css={{ 
    maxWidth: '$12', // space[12]
    borderRadius: '$xs', // radii.xs
    border: '$space$1 solid transparent',
    background: '$gray800', // colors.gray800
    color: '$gray100',
    height: '$12', // space[12]
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