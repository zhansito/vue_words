import axios from 'axios'

export default axios.create({
    baseURL: 'https://wordsapiv1.p.mashape.com/words',
    headers: {'X-Mashape-Key': '4356b5e156msh9b92a0cf6e38208p19f782jsn65a5888ddf1b'},
})