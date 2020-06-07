import axios from 'axios'
const KEY = "AIzaSyDnCk2hp5CQr2fV24-mLJVZV3A--hBK6jM"

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/videos',
    params:{
        part:'snippet',
        maxResults: 10,
        key:KEY
    }
})