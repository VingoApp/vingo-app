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

export async function getUserFeed(from , to) {
    let response = await fetch(import.meta.env.VITE_API_URL + `/feed?from=${from || 0}&to=${to || 20}`, {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    }).catch(error => {
        return []
    })
    response = await response.json()
    if (!response?.feed || response?.feed?.success == false) return []
    return response?.feed
}