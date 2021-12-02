const axios = require('axios')

const url = 'https://www.gov.uk/bank-holidays.json';


export const getData = async () => {
    let data = await axios.get(`${url}`)
    return data;
}