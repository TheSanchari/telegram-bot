const axios = require('axios')
const {API_KEY} = process.env
module.exports = async()=> {
      console.log('API_KEY',API_KEY)
      let url = 'https://api.api-ninjas.com/v1/quotes'
      const res = await axios.get(url, {
        headers: { 'X-Api-Key': API_KEY}
        });
        let msg = res.data[0].quote + ' - by Authoer '+ res.data[0].author
        console.log('RES',msg)
        return msg
    
}