import React, {useState, useEffect, useCallback } from 'react'
import Flashcard from './Flashcard';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import classes from './AllFlashCards.module.css';

const AllFlashCards = () => {
    const [ flashcards, setFlashcards ] = useState([])
    const [ selected, setSelected ] = useState(null);
    const [shown, setShown] = useState(false)

    const fetchCards = useCallback(async () => {
        const response = await fetch('https://react-flashcards-70208-default-rtdb.firebaseio.com/flashcards.json')
        const data = await response.json()
        let loadedData = []
        for (const key in data) {
            loadedData.push(
                {
                    id: key,
                    english: data[key].english,
                    portuguese: data[key].portuguese
                }
            )
        }
        setFlashcards(loadedData)
    }, [])

    useEffect(async () => {
        await fetchCards();
        setSelected(flashcards[0])
    }, [])

    let selVal = 0
    const nextHandler = () => {
        const maxVal = flashcards.length - 1
        if (selVal === maxVal) {
            selVal = 0
        }
        else {
            selVal +=1
        }
        setSelected(flashcards[selVal])
    }

    const prevHandler = () => {
        const maxVal = flashcards.length - 1
        if (selVal === 0) {
            selVal = maxVal
        }
        else {
            selVal -= 1
        }
        setSelected(flashcards[selVal])
    }

    return (
        <div className={classes.CardContainer}>
            <FaArrowAltCircleLeft className={classes.arrow} size={42} onClick={prevHandler}/>
            {selected ? <Flashcard front={selected.english} back={selected.portuguese} /> : <p> No Flashcards yet</p>}
            <FaArrowAltCircleRight className={classes.arrow} size={42} onClick={nextHandler}/>
        </div>
    )
}

export default AllFlashCards
