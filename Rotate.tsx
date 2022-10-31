
import React, { useState } from 'react';
import Imgix from "react-imgix";
import { Card, Col, Row, Button, Text, Container } from "@nextui-org/react";


let flipops:string[] = ["h", "v", "hv"];
let orientpops:number[] = [1, 2, 3,4,5,6,7,8,90,180,270];

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

const Rotate = () => {
  const [index, setIndex] = useState(0);
  const [flipcount, setFlipcount] = useState(0);
  const [orientcount, setOrientcount] = useState(0);
  const [angledeg, setAngledeg] = useState(0)
  
   
  const makeflip = () => {
    if (flipcount < ((flipops.length)))
     {
      setFlipcount(flipcount + 1);
    } else {
      setFlipcount(0)
    }
       
  }

  const makeorient = () => {
    if (orientcount < (orientpops.length)) {
      setOrientcount(orientcount + 1);
    } else {
      setOrientcount(0)
    }
  }
     

  const makerotate = () => {
    if (angledeg < 360) {
      setAngledeg(angledeg +30)
     
    } else {
      setAngledeg(0)
    }
    
     }

  const increaseCount = () => {
    setIndex(index + 1);
  }
    const decreaseCount = () => {
    setIndex(index - 1); 
  }
    
  return (
    <div>  
      <Container justify="center" align="center">
        <Col>
      <Imgix
        src={urls[index]}
        sizes="70vw"
        imgixParams={{ fit: "crop", ar: "1:1", flip: flipops[flipcount], orient: orientpops[orientcount], rot : angledeg,}}
      />

      </Col>
      </Container>
  <Col justify="center" align="center">
  <br/>
       
  <Button onPress={increaseCount}>
        Pick an image
     </Button>
    <br/>
       
     <Button onPress={makeflip}>
        Flip
     </Button>
      <br/>
      <Button onPress={makeorient}>
       Orient
     </Button>
     <br/>
     <Button onPress={makerotate}>
        Rot
     </Button>
     </Col>
     </div>
  )
};

export default Rotate;