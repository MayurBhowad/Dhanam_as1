import React, { useEffect, useMemo, useState } from 'react'
import moment from 'moment';

const QueryBar = (props) => {
    const { division, setDate1, setDate2 } = props;

    const [customDurationShow, setCustomDurationShow] = useState(false)
    const [isLastMonthSelected, setIsLastMonthSelected] = useState(false)
    const [isLastWeekSelected, setIsLastWeekSelected] = useState(false)
    const [isLastDaySelected, setIsLastDaySelected] = useState(false)


    const settingLastDays = (input) => {
        setIsLastMonthSelected(false)
        setIsLastWeekSelected(false)
        setIsLastDaySelected(false)
        switch (input) {
            case 'month':
                setIsLastMonthSelected(true);
                break;
            case 'week':
                setIsLastWeekSelected(true);
                break;
            case 'day':
                setIsLastDaySelected(true);
                break;

            default:
                setIsLastMonthSelected(false)
                setIsLastWeekSelected(false)
                setIsLastDaySelected(false)
                break;
        }
    }

    useEffect(() => {
        if (isLastMonthSelected) {
            setDate1(moment().subtract(1, "month")._d)
            setDate2(new Date)
        }
        if (isLastWeekSelected) {
            setDate1(moment().subtract(1, "week")._d)
            setDate2(new Date)
        }
        if (isLastDaySelected) {
            setDate1(moment().subtract(1, "day")._d)
            setDate2(new Date)
        }
        if (!isLastMonthSelected && !isLastWeekSelected && !isLastDaySelected) {
            setDate1(undefined)
            setDate2(undefined)
        }
    }, [isLastMonthSelected, isLastWeekSelected, isLastDaySelected])



    return (
        <div>
            <div className='qerybar-div'>
                <div className="division-selector">
                    {division.map(div => (
                        <div key={div} className='eng'>
                            <input type="checkbox" id={div} name={div} value={div} />
                            <label className='label-active' htmlFor={div}>{div}</label><br></br>
                        </div>
                    ))}
                </div>
            </div>
            <hr />
            <div className='qerybar-sorter'>
                <div className='eng'>
                    <input type="checkbox" id="lastmonth" name="lastmonth" checked={isLastMonthSelected} onChange={() => isLastMonthSelected ? settingLastDays() : settingLastDays('month')} />
                    <label htmlFor="lastmonth"> Last Month</label><br></br>
                </div>

                <div className='sco'>
                    <input type="checkbox" id="lastweek" name="lastweek" checked={isLastWeekSelected} onChange={() => isLastWeekSelected ? settingLastDays() : settingLastDays('week')} />
                    <label htmlFor="lastweek"> Last week</label><br></br>
                </div>

                <div className='nor'>
                    <input type="checkbox" id="yesturday" name="yesturday" checked={isLastDaySelected} onChange={() => isLastDaySelected ? settingLastDays() : settingLastDays('day')} />
                    <label htmlFor="yesturday"> Yesturday</label><br></br>
                </div>
            </div>
            <div className="querybar-sorter-mob">
                <label htmlFor="qb-date">Choose Duration</label>

                <select id="qb-date" onChange={e => settingLastDays(e.target.value)}>
                    <option value="month">Last month</option>
                    <option value="week">Last week</option>
                    <option value="day">Yesturday</option>
                </select>
            </div>
            <div style={{ "text-align": 'center', "margin": "1rem 0 0 0" }} >OR</div>
            <hr />
            <div className="select-duration">
                <div className='nor'>
                    <input type="checkbox" id="selectDate" name="selectDate" checked={customDurationShow} onChange={e => setCustomDurationShow(!customDurationShow)} />
                    <label htmlFor="selectDate"> Select Dates for duration</label><br></br>
                </div>
                {customDurationShow ?
                    (<div className="calendar">
                        <input type="date" name="startdate" id="startdate" onChange={e => setDate1(new Date(e.target.value))} />
                        <p>To</p>
                        <input type="date" name="startdate" id="startdate" onChange={e => setDate2(new Date(e.target.value))} />
                    </div>) : null
                }
            </div>
            <hr />
        </div >
    )
}

export default QueryBar

