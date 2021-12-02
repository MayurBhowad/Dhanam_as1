import React from 'react'

const Card = ({ card }) => {
    return (
        <>
            <div className={card.bunting ? 'card1 bunting' : 'card1'}>
                <h1>{card.title}e</h1>
                <p>{card.date}</p>
                <h4>{card.note ? card.note : 'Note Not Available!'}</h4>
            </div>
        </>
    )
}

export default Card
