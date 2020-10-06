import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {airContext} from '../contexts/air'
import {fireContext} from '../contexts/fire'
import {waterContext} from '../contexts/water'
import {earthContext} from '../contexts/earth'

const Question = (props) => {

const {air , setAir}=useContext(airContext)
const {fire , setFire}=useContext(fireContext)
const {water , setWater}=useContext(waterContext)
const {earth , setEarth}=useContext(earthContext)

    return (
        <Row>
            <Col sm={4} className="text-center">
                <h3 className="question">{props.question}</h3>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <Button variant="danger">A</Button>
                    </InputGroup.Prepend>
                    <InputGroup.Text>{props.A}</InputGroup.Text>
                   
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <Button variant="danger">B</Button>
                    </InputGroup.Prepend>
                    <InputGroup.Text>{props.B}</InputGroup.Text>
                    
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <Button variant="danger">C</Button>
                    </InputGroup.Prepend>
                    <InputGroup.Text>{props.C}</InputGroup.Text>
                   
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <Button variant="danger">D</Button>
                        <InputGroup.Text>{props.D}</InputGroup.Text>
                    </InputGroup.Prepend>
                    
                </InputGroup>
            </Col>

        </Row>
    )
}

export default Question