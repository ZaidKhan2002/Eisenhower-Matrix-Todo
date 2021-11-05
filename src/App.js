import React from 'react';
import "./App.css"
import Container from './components/Container';
import Navbar from './components/Navbar';
import TodoApp from './components/TodoApp';

function App() {

  return (
   <>
   <Navbar/>
   <Container/>
   <TodoApp/>
   </>
  );
}

export default App;
