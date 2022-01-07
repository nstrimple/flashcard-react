import React, { useState } from 'react'
import Card from '../UI/Card/Card';
import classes from './Flashcard.module.css'
import ReactCardFlip from 'react-card-flip';

function Flashcard() {
    const front = 'Girl';
    const back = 'Menina';
    const [ side, setSide ] = useState(false);
    const flipHandler = () => {
        setSide((prevState) => {
            return !prevState
        })
    }
    return (
        <ReactCardFlip isFlipped={side}>
        <Card onClick={flipHandler}>{front}</Card>
        <Card onClick={flipHandler}>{back}</Card>
        </ReactCardFlip>
    )
}

export default Flashcard
