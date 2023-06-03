import React from 'react';
import { useState } from 'react';
import './App.css'
import Form from './components/Form.jsx'
import Card from './components/Card.jsx'

function App() {

  const [nombre, setNombre] = useState("")
  const [banda, setBanda] = useState("")

  const submitEvent = (props) => {

    setNombre(props.nombre)
    
    setBanda(props.banda)



  }

  return (
    <>

        <Form onSubmit={submitEvent}></Form>

        <Card nombre={nombre} banda={banda}></Card>

    </>
  )
}

export default App
