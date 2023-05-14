import axios from 'axios'

export async function getUser() {
    let response = await axios.get(import.meta.env.VITE_API_URL + '/user', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    }).catch(error => {
        return {}
    })
    if (!response?.data || !response.data?.user) return {}
    return response.data?.user
}

export async function getUserFeed() {
    let response = await fetch(import.meta.env.VITE_API_URL + '/feed', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    }).catch(error => {
        return []
    })
    response = await response.json()
    if (!response?.feed) return []
    return response?.feed
}