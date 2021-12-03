import React from 'react'
import Card from './smalls/Card.component'

let data = [
    {
        "key": 1,
        "title": "New Year’s Day",
        "date": "2016-01-01",
        "notes": "",
        "bunting": true
    },
    {
        "key": 2,
        "title": "Good Friday",
        "date": "2016-03-25",
        "notes": "",
        "bunting": false
    },
    {
        "key": 3,
        "title": "Easter Monday",
        "date": "2016-03-28",
        "notes": "",
        "bunting": true
    },
    {
        "key": 4,
        "title": "Early May bank holiday",
        "date": "2016-05-02",
        "notes": "",
        "bunting": true
    },
    {
        "key": 5,
        "title": "Early May bank holiday",
        "date": "2016-05-02",
        "notes": "",
        "bunting": true
    },
    {
        "key": 6,
        "title": "Early May bank holiday",
        "date": "2016-05-02",
        "notes": "",
        "bunting": true
    }
]

const Event = (props) => {
    const { allData } = props;

    return (
        <div className='card-deck'>
            {allData.map((car, i) => (<Card key={i} card={car} />))}
        </div>
    )
}

export default Event
