import { useEffect } from "react";
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Hope =({value})=>{
const Handel =()=>{
    console.log("gay");

}
const Hot =()=>{
    console.log("hot");
}
const Header = styled.h3`
color: red;
font-size: 20px;
wideth: 100px;
height: 100px;
background-color: black;
item-align: center;
display: flex;
justify-content: center;

`

useEffect (()=>{
    console.log("use effect");
    
        Handel();
        console.log("cleanup");
    
},[])

useEffect(()=>{
    
    Hot();
    
},[value])



    return(
      <div><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></div>
    )

}
export default Hope;