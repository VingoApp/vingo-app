export async function addFilter(combo) {
    let response = await fetch(import.meta.env.VITE_API_URL + '/filters/add?combo='+JSON.stringify(combo), {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify(combo)
    }).catch(error => {
        return {}
    })
    response = await response.json()
    if (!response) return false
    return response
}

export async function removeFilter(id) {
    let response = await fetch(import.meta.env.VITE_API_URL + '/filters/remove?comboName='+id, {
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

