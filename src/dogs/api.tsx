import axios from "axios";

const instance = axios.create({
    baseURL: 'https://dog.ceo/api/breed/hound/'
})

export const getHoundPic = () => instance.get('images')
    .then(response => response.data.status === 'success' && response.data.message)
export const getHoundSubList = () => instance.get('list')
    .then(response => response.data.status === 'success' && response.data.message)