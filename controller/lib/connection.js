const axios = require('axios')
const { TOKEN, SERVER_URL } = process.env
const baseUrl = `https://api.telegram.org/bot${TOKEN}`

function getAxiosInstance () {
    return {
         get(method,params){
            return axios.get(`${method}`,{
                baseURL:baseUrl,
                params
            })
         },
         post(method,data){
            return axios({
                method:"post",
                baseURL:baseUrl,
                url:`${method}`,
                data
            })
         }
    }

}

module.exports = {axiosInstance:getAxiosInstance()}