import axios from 'axios'

export default axios.create({
    baseURL: 'https://wordsapiv1.p.rapidapi.com',
    headers:  {
        'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
        'x-rapidapi-key': '4356b5e156msh9b92a0cf6e38208p19f782jsn65a5888ddf1b'
      }
})