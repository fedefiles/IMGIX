import React, { useState } from 'react';
import Imgix from "react-imgix";
import { Card, Col, Row, Button, Text, Container } from "@nextui-org/react";
import "./style2.css";


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

const Adjust = () => {
  const [index, setIndex] = useState(0);
  const [bright, setBright] = useState(0);
  const [contrast, setContrast] = useState(0);
  const [exposure, setExposure] = useState(0)
  
   
  const makebright = () => {
    if (bright < (100))
     {
      setBright(bright +20);
    } else {
      setBright(0)
    }
       
  }

  const makecontrast = () => {
    if (bright < (100))
     {
      setBright(bright +20);
    } else {
      setBright(0)
    }
       
  }
     

  const makeexposure = () => {
    if (bright < (100))
    {
     setBright(bright +20);
   } else {
     setBright(0)
   }
      
 }

  const increaseCount = () => {
    if (index < ((urls.length)+1)) {
      setIndex(index + 1);
    } else {
      setIndex(0)
    }
  }
   
  


    const decreaseCount = () => {
    setIndex(index - 1); 
  }
    
  return (
    <div className="Adjust-img">  
      <Container justify="center" align="center">
        <Col>
      <Imgix
        src={urls[index]}
        sizes="60vw"
        imgixParams={{ fit: "crop", ar: "1:1", bri: bright}}
      />

      </Col>
      </Container>
  <Col justify="center" align="center">
  <br/>
       
    <Button onPress={increaseCount}>
        Pick an image
     </Button>
    <br/>
       
     <Button onPress={makebright}>
     Brightness
     </Button>
      <br/>
      <Button onPress={increaseCount}>
      Contrast 
     </Button>
     <br/>
     <Button onPress={increaseCount}>
     Exposure
     </Button>
    
     <br/>
      <Button onPress={increaseCount}>
      Gamma
     </Button>
     <br/>
     <Button onPress={increaseCount}>
     Highlight
     </Button>
     <br/>
      <Button onPress={increaseCount}>
      Hue Shift
     </Button>
     <br/>
     <Button onPress={increaseCount}>
     Invert
     </Button>
     <br/>
      <Button onPress={increaseCount}>
      Saturation
     </Button>
     <br/>
     <Button onPress={increaseCount}>
     Shadow
     </Button>
     <br/>
      <Button onPress={increaseCount}>
      Sharpen
     </Button>
     <br/>
     <Button onPress={increaseCount}>
     Unsharp Mask
     </Button>
     <br/>
      <Button onPress={increaseCount}>
      Unsharp Mask Radius
     </Button>
     <br/>
     <Button onPress={increaseCount}>
     Vibrance
     </Button>
     </Col>
     
     
     </div>
  )

  }


export default Adjust;