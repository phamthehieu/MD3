axios = require('axios')
async function getAxios() {
    let json = await axios.get('https://jsonplaceholder.typicode.com/users')
    return json.data
}
getAxios().then(result => console.log(result))