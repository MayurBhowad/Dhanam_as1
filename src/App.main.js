import React, { useEffect, useState } from 'react'
import Event from './components/Event.component';
import QueryBar from './components/QueryBar.component';
import { getData } from './services/onlineData.service';

const App = () => {
    const [data, setData] = useState({})
    const [division, setDivision] = useState([])
    const [allData, setAllData] = useState([]);

    const [date1, setDate1] = useState()
    const [date2, setDate2] = useState()

    useEffect(() => {
        settingAllData(division, data, date1, date2, setAllData);
    }, [data, date1, date2])

    useEffect(() => {
        getData().then(arr => {
            setDivision(Object.keys(arr.data))
            setData(arr.data);
        })
    }, [])

    return (
        <div>
            <QueryBar
                division={division}
                setDate1={setDate1}
                setDate2={setDate2}
            />
            <Event
                allData={allData}
            />
        </div>
    )
}

export default App


function settingAllData(division, data, date1, date2, setAllData) {
    setAllData([])
    division.map(div => {
        data[div].events.map(el => {
            if (date1 !== undefined || date2 !== undefined) {
                if (date1 < new Date(el.date) && date2 > new Date(el.date) || date1 > new Date(el.date) && date2 < new Date(el.date)) {
                    setAllData(prevState => [...prevState, el])
                }
            } else {
                setAllData(prevState => [...prevState, el])
            }
        })
    })
}