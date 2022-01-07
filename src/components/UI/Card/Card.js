import React from 'react'
import classes from './Card.module.css'

function Card(props) {
    return (
        <div className={classes.Card} onClick={props.onClick}>
            <div className={classes.cardContent}>
            {props.children}
            </div>
        </div>
    )
}

export default Card
