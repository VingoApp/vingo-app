import axios from 'axios'

export async function getUser() {
    let response = await axios.get(import.meta.env.VITE_API_URL + '/user', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    }).catch(error => {
        console.log(error)
        return {}
    })
    console.log(response.data)
    if (!response?.data || !response.data?.user) return {}
    return response.data?.user
}