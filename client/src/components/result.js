import React, {useContext} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {airContext }from '../contexts/air';
import {fireContext} from '../contexts/fire';
import {earthContext} from '../contexts/earth';
import {waterContext} from '../contexts/water';


const Result = ()=>{
    const {air}=useContext(airContext);
    const {fire}=useContext(fireContext);
    const {water}=useContext(waterContext);
    const {earth}=useContext(earthContext);

    const handleClick=()=>{
        console.log(`
        fire:${fire}
        earth:${earth}
        water:${water}
        air"${air}`)
    }


    return(
        <Row>
            <Col>
                <Button className="success" onClick={handleClick}>Results!</Button>
            </Col>
        </Row>
    )
}

export default Result
