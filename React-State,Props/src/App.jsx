import { useState } from 'react'
import './App.css'
import Form from './components/Form';
import Table from './components/Table';

function App() {
  const [arr, setArr] = useState([])

  return (
    <>
      <h1>Todo App</h1>
      <Form arr={arr} setArr={setArr} />
      <hr />
      <Table arr={arr} setArr={setArr} />
    </>
  );
}

export default App
