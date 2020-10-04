import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Question = (props) => {
    return (
        <Row>
            <Col sm={4}>
                <h3>{props.question}</h3>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <Button variant="outline-secondary">A</Button>
                    </InputGroup.Prepend>
                    <InputGroup.Text>{props.A}</InputGroup.Text>
                   
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <Button variant="outline-secondary">B</Button>
                    </InputGroup.Prepend>
                    <InputGroup.Text>{props.B}</InputGroup.Text>
                    
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <Button variant="outline-secondary">C</Button>
                    </InputGroup.Prepend>
                    <InputGroup.Text>{props.C}</InputGroup.Text>
                   
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <Button variant="outline-secondary">D</Button>
                        <InputGroup.Text>{props.D}</InputGroup.Text>
                    </InputGroup.Prepend>
                    
                </InputGroup>
            </Col>

        </Row>
    )
}

export default Question