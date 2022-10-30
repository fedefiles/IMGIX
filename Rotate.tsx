
import React, { useState } from 'react';
import Imgix from "react-imgix";
import { Card, Col, Row, Button, Text } from "@nextui-org/react";

import ImgixClient from '@imgix/js-core';

const client = new ImgixClient({
  domain: 'testing.imgix.net',
  secureURLToken: 'ak_bf229557a3d350706e8e1c42bf659237830870ad5f95e6902e07215ad6c02738',
});

let flipops:string[] = ["h", "v", "hv"];

let urls: string[] = [
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

const Rotate = () => {
  const [index, setIndex] = useState(0);
  const [flip, setFlip] = useState(0)
   
  const makeflip = () => {
    setFlip(flip + 1);
    console.log(flip);
    setIndex(0);
    const url = client.buildURL(urls[index], { w: 400, h: 300 });
console.log(url); // => 'https://testing.imgix.net/users/1.png?w=400&h=300&s=…'
  }

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
 <Imgix
        src={urls[index]}
        sizes="400px"
        imgixParams={{ fit: "crop", ar: "1:1", flip: "hv", }}
      />
  <Col justify="center" align="center">
    <br/>
       
     <Button onPress={makeflip}>
        Flip
     </Button>
      <br/>
      <Button onPress={increaseCount}>
       Orient
     </Button>
     <br/>
     <Button onPress={increaseCount}>
        Rot
     </Button>
     </Col>
     </div>
  )
};
export default Rotate;