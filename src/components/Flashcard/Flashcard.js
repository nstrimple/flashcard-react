import React, { useState } from 'react'
import Card from '../UI/Card/Card';
import ReactCardFlip from 'react-card-flip';

function Flashcard(props) {
    const [ side, setSide ] = useState(false);
    const [ color, setColor] = useState(false);
    const flipHandler = () => {
        setSide((prevState) => {
            return !prevState
        })
        setColor(prevColor => {
            return !prevColor
        })
    }
    return (
        <ReactCardFlip isFlipped={side}>
        <Card onClick={flipHandler}>{props.front}</Card>
        <Card onClick={flipHandler}>{props.back}</Card>
        </ReactCardFlip>
    )
}

export default Flashcard
