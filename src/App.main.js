import React, { useEffect, useState } from 'react'
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
            <p>App works!</p>
        </div>
    )
}

export default App

