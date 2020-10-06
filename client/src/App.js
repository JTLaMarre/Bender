import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import questions from './questions.json';
import Question from './components/question';
import AirContextProvider from './contexts/air'
import FireContextProvider from './contexts/fire'
import EarthContextProvider from './contexts/earth'
import WaterContextProvider from './contexts/water'

function App() {
  return (
    <AirContextProvider>
    <FireContextProvider>
    <EarthContextProvider>
    <WaterContextProvider>
    <Container>

    <div className="App">
      {questions.map((question)=>{
        return(
          <Question key={question.id} question={question.question} A={question.A} B={question.B} C={question.C} D={question.C} />
        )
      })}
    </div>
    </Container>
    </WaterContextProvider>
    </EarthContextProvider>
    </FireContextProvider>
    </AirContextProvider>
  );
}

export default App;
