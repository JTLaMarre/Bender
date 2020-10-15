import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import questions from './questions.json';
import Question from './components/question';
import AirContextProvider from './contexts/air';
import FireContextProvider from './contexts/fire';
import EarthContextProvider from './contexts/earth';
import WaterContextProvider from './contexts/water';
import Result from './components/result';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <AirContextProvider>
    <FireContextProvider>
    <EarthContextProvider>
    <WaterContextProvider>
    <Container>
    <div className="App">
    <Row className="justify-content-center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Avatar_The_Last_Airbender_logo.svg/338px-Avatar_The_Last_Airbender_logo.svg.png" alt="Avatar logo sourced from wikipedia page"/>
    </Row>
    <hr/>
      {questions.map((question)=>{
        return(
          <Question key={question.id} question={question.question} A={question.A} B={question.B} C={question.C} D={question.D} />
        )
      })}
    <Result/>
    </div>
    </Container>
    </WaterContextProvider>
    </EarthContextProvider>
    </FireContextProvider>
    </AirContextProvider>
  );
}

export default App;
