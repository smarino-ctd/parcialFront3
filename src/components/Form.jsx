import React from 'react';
import { useState } from 'react';
import './Form-modules.css'

const Form = (props) => {

    const [nombre, setNombre] = useState("")
    const [banda, setBanda] = useState("")
    const [error, setError] = useState("")

    const submitEvent = (e) => {

        e.preventDefault()

        setNombre(e.target[0].value);
        setBanda(e.target[1].value);

        

        



        props.onSubmit({nombre,banda})



        

    }

    return(

        <>

            <form onSubmit={submitEvent}>

                <input type="text" placeholder='Ingresa tu nombre'/>
                <input type="text" placeholder='Ingresa tu banda favorita'/>

                <button type="submit" className='sub-btn'>ENVIAR</button>

            </form>

            <span className='error'>{error}</span>

        </>

    )

}

export default Form