import React, {useState, useEffect, useCallback } from 'react'
import Flashcard from './Flashcard';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import classes from './AllFlashCards.module.css';

const AllFlashCards = () => {
    const [ flashcards, setFlashcards ] = useState([])
    const [cardVal, setCardVal] = useState(0)

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
    }, [])

    const nextHandler = () => {
        const maxVal = flashcards.length - 1
        setCardVal(prevVal => {
            if (prevVal === maxVal){
                return 0
            }
            else {
                return prevVal+1
            }
        })
    }

    const prevHandler = () => {
        const maxVal = flashcards.length - 1
        setCardVal(prevVal => {
            if (prevVal === 0) {
                return maxVal
            }
            else {
                return prevVal - 1
            }
        })
    }

    return (
        <div className={classes.CardContainer}>
            <FaArrowAltCircleLeft className={classes.arrow} size={42} onClick={prevHandler}/>
            {flashcards.length > 0 ? <Flashcard front={flashcards[cardVal].english} back={flashcards[cardVal].portuguese} /> : <p> No Flashcards yet</p>}
            <FaArrowAltCircleRight className={classes.arrow} size={42} onClick={nextHandler}/>
        </div>
    )
}

export default AllFlashCards
