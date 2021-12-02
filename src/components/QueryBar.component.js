import React from 'react'

const QueryBar = () => {
    return (
        <div>
            <div className='qerybar-div'>
                <div className="division-selector">
                    <div className='eng'>
                        <input type="checkbox" id="england-and-wales" name="england-and-wales" value="england-and-wales" />
                        <label className='label-active' htmlFor="england-and-wales"> england-and-wales</label><br></br>
                    </div>

                    <div className='sco'>
                        <input type="checkbox" id="scotland" name="scotland" value="scotland" />
                        <label htmlFor="scotland"> scotland</label><br></br>
                    </div>

                    <div className='nor'>
                        <input type="checkbox" id="northern-ireland" name="northern-ireland" value="northern-ireland" />
                        <label htmlFor="northern-ireland"> northern-ireland</label><br></br>
                    </div>
                </div>
            </div>
            <hr />
            <div className='qerybar-sorter'>
                <div className='eng'>
                    <input type="checkbox" id="lastmonth" name="lastmonth" value="lastmonth" />
                    <label htmlFor="lastmonth"> Last Month</label><br></br>
                </div>

                <div className='sco'>
                    <input type="checkbox" id="lastweek" name="lastweek" value="lastweek" />
                    <label htmlFor="lastweek"> Last week</label><br></br>
                </div>

                <div className='nor'>
                    <input type="checkbox" id="yesturday" name="yesturday" value="yesturday" />
                    <label htmlFor="yesturday"> Yesturday</label><br></br>
                </div>
            </div>
            <div className="querybar-sorter-mob">
                <label htmlFor="qb-date">Choose Duration</label>

                <select id="qb-date">
                    <option value="30">Last month</option>
                    <option value="7">Last week</option>
                    <option value="1">Yesturday</option>
                </select>
            </div>
            <div style={{ "text-align": 'center', "margin": "1rem 0 0 0" }} >OR</div>
            <hr />
            <div className="select-duration">
                <div className='nor'>
                    <input type="checkbox" id="selectDate" name="selectDate" value="selectDate" />
                    <label htmlFor="selectDate"> Select Dates for duration</label><br></br>
                </div>
                <div className="calendar">
                    <input type="date" name="startdate" id="startdate" />
                    <p>To</p>
                    <input type="date" name="startdate" id="startdate" />
                </div>
            </div>
        </div >
    )
}

export default QueryBar
