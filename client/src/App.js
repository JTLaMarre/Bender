import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import questions from './questions.json';
import Question from './components/question'

function App() {
  return (
    <Container>

    <div className="App">
      {questions.map((question)=>{
        return(
          <Question key={question.id} question={question.question} A={question.A} B={question.B} C={question.C} D={question.C} />
        )
      })}
    </div>
    </Container>
  );
}

export default App;
