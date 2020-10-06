import React,{useContext,useState}from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {airContext} from '../contexts/air'
import {fireContext} from '../contexts/fire'
import {waterContext} from '../contexts/water'
import {earthContext} from '../contexts/earth'

const Question = (props) => {

const {air , setAir}=useContext(airContext);
const {fire , setFire}=useContext(fireContext);
const {water , setWater}=useContext(waterContext);
const {earth , setEarth}=useContext(earthContext);
const[answered , setAnswered]=useState(false)

const handleA =()=>{
    if(answered===false){
        setFire(fire + 1)
       displayCurrent()
       setAnswered(true)
    }
    else{
        alert('question already answered')
    }
}
const handleB =()=>{
    if(answered===false){
        setEarth(earth + 1)
       displayCurrent()
       setAnswered(true)
    }
    else{
        alert('question already answered')
    }
}
const handleC =()=>{
    if(answered===false){
        setWater(water + 1)
       displayCurrent()
       setAnswered(true)
    }
    else{
        alert('question already answered')
    }
}
const handleD =()=>{
    if(answered===false){
        setAir(air + 1)
       displayCurrent()
       setAnswered(true)
    }
    else{
        alert('question already answered')
    }
}
const displayCurrent=()=>{
    console.log(
    `
    fire:${fire}
    earth:${earth}
    water:${water}
    air:${air}`)
}

    return (
        <Row>
            <Col sm={4} className="text-center">
                <h3 className="question">{props.question}</h3>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <Button variant="danger" onClick={handleA}>A</Button>
                    </InputGroup.Prepend>
                    <InputGroup.Text>{props.A}</InputGroup.Text>
                   
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <Button variant="danger" onClick={handleB}>B</Button>
                    </InputGroup.Prepend>
                    <InputGroup.Text>{props.B}</InputGroup.Text>
                    
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <Button variant="danger" onClick={handleC}>C</Button>
                    </InputGroup.Prepend>
                    <InputGroup.Text>{props.C}</InputGroup.Text>
                   
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <Button variant="danger" onClick={handleD}>D</Button>
                        <InputGroup.Text>{props.D}</InputGroup.Text>
                    </InputGroup.Prepend>
                    
                </InputGroup>
            </Col>

        </Row>
    )
}

export default Question