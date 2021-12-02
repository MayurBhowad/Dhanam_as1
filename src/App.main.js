import React, { useEffect, useState } from 'react'
import Event from './components/Event.component';
import QueryBar from './components/QueryBar.component';
import { getData } from './services/onlineData.service';

const App = () => {
    const [data, setData] = useState({})
    const [division, setDivision] = useState([])

    useEffect(() => {
        getData().then(arr => {
            setData(arr.data);
            setDivision(Object.keys(arr.data))
        })
    }, [])

    return (
        <div>
            <QueryBar />
            <Event />
        </div>
    )
}

export default App

