
export async function addFilter(id) {
    let response = await fetch(import.meta.env.VITE_API_URL + '/filters/add?comboId='+id, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    }).catch(error => {
        return {}
    })
    response = await response.json()
    if (!response) return false
    return response
}

export async function removeFilter(id) {
    let response = await fetch(import.meta.env.VITE_API_URL + '/filters/remove?comboId='+id, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    }).catch(error => {
        return {}
    })
    response = await response.json()
    if (!response) return false
    return response
}

