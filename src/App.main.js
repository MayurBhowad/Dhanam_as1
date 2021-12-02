import React, { useEffect, useState } from 'react'
import Event from './components/Event.component';
import QueryBar from './components/QueryBar.component';
import { getData } from './services/onlineData.service';

const App = () => {
    const [data, setData] = useState({})
    const [division, setDivision] = useState([])
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        division.map(div => {
            data[div].events.map(el => setAllData(prevState => [...prevState, el]))
        })
    }, [data])

    useEffect(() => {
        getData().then(arr => {
            setDivision(Object.keys(arr.data))
            setData(arr.data);
        })
    }, [])
    console.log(allData);

    return (
        <div>
            <QueryBar
                division={division}
            />
            <Event
                allData={allData}
            />
        </div>
    )
}

export default App

