import {createContext} from "react";
import React, { useState } from 'react';
import { Card, Col, Row, Button, Tex, Spacer } from "@nextui-org/react";

const Imagestate = createContext("");
let urls: string[] = ["https://assets.imgix.net/unsplash/alarmclock.jpg",
"https://assets.imgix.net/unsplash/bear.jpg",
"https://assets.imgix.net/unsplash/bridge.jpg",
"https://assets.imgix.net/unsplash/citystreet.jpg",
"https://assets.imgix.net/unsplash/coffee.JPG",
"https://assets.imgix.net/unsplash/coyote.jpg",
"https://assets.imgix.net/unsplash/goldengate.jpg",
"https://assets.imgix.net/unsplash/macaque.jpg",
"https://assets.imgix.net/unsplash/motorbike.jpg",
"https://assets.imgix.net/unsplash/mountains.jpg",
"https://assets.imgix.net/unsplash/paperlamp.jpg",
"https://assets.imgix.net/unsplash/pineneedles.jpg",
"https://assets.imgix.net/unsplash/raspberries.jpg",
"https://assets.imgix.net/unsplash/transport.jpg",
"https://assets.imgix.net/unsplash/turntable.jpg",
"https://assets.imgix.net/unsplash/typewriter.jpg",
"https://assets.imgix.net/unsplash/umbrella.jpg",
"https://assets.imgix.net/unsplash/vintagecameras.jpg",
"https://assets.imgix.net/unsplash/windows.jpg",
"https://assets.imgix.net/unsplash/womansitting.jpg",
"https://assets.imgix.net/examples/balloons.jpg",
"https://assets.imgix.net/examples/blueberries.jpg",
"https://assets.imgix.net/examples/bluehat.jpg",
"https://assets.imgix.net/examples/butterfly.jpg",
"https://assets.imgix.net/examples/espresso.jpg",
"https://assets.imgix.net/examples/jellyfish.jpg",
"https://assets.imgix.net/examples/kingfisher.jpg",
"https://assets.imgix.net/examples/lorie.png",
"https://assets.imgix.net/examples/mountain.jpg",
"https://assets.imgix.net/examples/newt.jpg",
"https://assets.imgix.net/examples/octopus.jpg",
"https://assets.imgix.net/examples/puffins.jpg",
"https://assets.imgix.net/examples/redleaf.jpg",
"https://assets.imgix.net/examples/snake.jpg",
"https://assets.imgix.net/examples/treefrog.jpg",
"https://assets.imgix.net/examples/vista.png",
"https://assets.imgix.net/examples/womanlandscape.jpg",
"https://assets.imgix.net/gif-examples/imgix-logo-ani.gif"];

const Home = () => {
  const [index, setIndex] = useState(0);
    
  const increaseCount = () => {
    setIndex(index + 1);
  }
  const decreaseCount = () => {
    setIndex(index - 1); 
  }
    
  return (
    <div>
      <Card css={{ w: "100%", h: "500px" }}>
   
   <Card.Body css={{ p: 0 }}>
     <Card.Image
       src={urls[index]}
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
 <Spacer y={1} />
  <Col justify="center" align="center">
    
       
     <Button onPress={increaseCount}>
        Pick an Image
     </Button>
      <br/>
      
     </Col>
     <Imagestate.Provider value={urls[index]}>
        
        </Imagestate.Provider>
     </div>
  )
};
export default Home;
export {Imagestate};