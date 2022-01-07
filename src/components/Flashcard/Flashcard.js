import React, { useState } from 'react'
import Card from '../UI/Card/Card';
import classes from './Flashcard.module.css'

function Flashcard() {
    const front = 'Girl';
    const back = 'Menina';
    const [ side, setSide ] = useState(true);
    const flipHandler = () => {
        setSide((prevState) => {
            return !prevState
        })
    }
    return (
        <div className={classes.CardFlip}>
            <Card onClick={flipHandler}>{side ? front : back}</Card>
        </div>
    )
}

export default Flashcard
