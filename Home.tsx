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
     </div>
  )
};
export default Home;
