import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {airContext }from '../contexts/air';
import {fireContext} from '../contexts/fire';
import {earthContext} from '../contexts/earth';
import {waterContext} from '../contexts/water';

const Retake =()=>{

const handleSubmit =()=>{
    window.location.reload()
    console.log('poop')
}


    return(
        <Row className="justify-content-center">
            <Col className="justify-content-center">
                <Button className="btn-success btn-lg" id="retake"  onClick={handleSubmit}>Retake</Button>
            </Col>
        </Row>
    )
    
}

export default Retake