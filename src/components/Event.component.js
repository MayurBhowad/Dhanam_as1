import React from 'react'
import Card from './smalls/Card.component'

const Event = (props) => {
    const { allData } = props;

    return (
        <div className='card-deck'>
            {allData.map((car, i) => (<Card key={i} card={car} />))}
        </div>
    )
}

export default Event
