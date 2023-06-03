import React from 'react';
import './Card-modules.css'

const Card = (props) => {


    return(

        <section className='card'>

            <h1>Hola {props.nombre}</h1>

            <h2>Sabemos que tu banda favorita es:</h2>

            <h3>{props.banda}</h3>

        </section>

    )

}

export default Card