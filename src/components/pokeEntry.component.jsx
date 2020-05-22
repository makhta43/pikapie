import React from 'react';
import './pokeEntry.styles.css';
import {Card} from 'react-bootstrap';

function PokeEntry(props){
    return(
        <Card className="cardbg" style={{ width: '18rem' }}>
        <Card.Img className="cardbg" variant="top" src={props.image}/>
        <Card.Body className="cardbg">
          <Card.Title>{props.title}</Card.Title>
            {props.children}
        </Card.Body>
      </Card>
    )
}

export default PokeEntry;