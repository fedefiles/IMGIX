import {createContext} from "react";
import React, { useState } from 'react';
import { Card, Col, Row, Button, Text, Spacer } from "@nextui-org/react";
import {Card0} from "./Card0"





const Home = () => {
 
  const [index, setIndex] = useState(0);
  const [img, setImg] = useState("");
    
  const increaseCount = () => {
    setIndex(index + 1);
  }
  const decreaseCount = () => {
    setIndex(index - 1); 
  }
    
  return (
    <div>
    <Card0>

    </Card0>
    <Spacer x={1} />
    <Card css={{ w: "100%", h: "500px" }}>
   
   <Card.Body css={{ p: 0 }}>
     <Card.Image
       src="https://assets.imgix.net/gif-examples/imgix-logo-ani.gif"
       objectFit="cover"
       width="100"
       height="100%"
       alt="Relaxing app background"
       
     />
   </Card.Body>
   <Card.Footer
     isBlurred
     css={{
       position: "absolute",
       bgBlur: "#0f111466",
       borderTop: "$borderWeights$light solid $gray800",
       bottom: 0,
       zIndex: 1,
     }}
   >
     <Row justify="center" align="center">
       
     
         
     </Row>
   </Card.Footer>
 </Card>
     </div>
  )
};
export default Home;
