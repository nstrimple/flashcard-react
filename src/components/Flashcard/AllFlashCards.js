import React, {useState, useEffect} from 'react'

function AllFlashCards() {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);
    const [ flashcards, setFlashcards ] = useState([])
    const fetchCards = async () => {
        setError(null);
        setIsLoading(true);
        try {
            const response = await fetch('https://react-flashcards-70208-default-rtdb.firebaseio.com/flashcards.json')
            if (!response.ok) {
                throw new Error('Fuck')
            }
            const data = await response.json()
            let loadedCards = []
            for (const key in data) {
                loadedCards.push(
                    {
                        id: key,
                        eng: data[key].english,
                        port: data[key].portuguese
                    }
                )
            }
            setFlashcards(loadedCards)

        } catch (error) {
            setError(error.message || 'Fuck')
        }
        setIsLoading(false)
    }

    useEffect(() => {
        fetchCards()
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default AllFlashCards
