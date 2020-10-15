import React, {useContext,useState} from 'react';
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
    
    const [resNum ,setResNum]=useState(0)



    const highest =(arr,arr2)=>{
        let num = 0;
        let res ='none';
        for(let i=0;i<arr.length;i++){
            if(arr[i]>num){
                num = arr[i]
                res=arr2[i]
                
            }
        }
        alert(`you are a ${res} bender`)
        
       
    }

   
    

    const handleClick=()=>{

       highest([fire,earth,air,water],['fire','earth','air','water'])



        console.log(`
        fire:${fire}
        earth:${earth}
        water:${water}
        air"${air}`)


       
     
    }

    
    


    return(
        <Row className="justify-content-center">
            <Col className="justify-content-center">
                <Button className="btn-info btn-lg" id="results" onClick={handleClick}>Results!</Button>
            </Col>
        </Row>
    )
}

export default Result
