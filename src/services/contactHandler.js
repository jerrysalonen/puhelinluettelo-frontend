import axios from 'axios'

const url = '/api/persons'

const readAll = () => {
    const request = axios.get(url)
    return request.then(response => {
        return response.data
    })
}

const addContact = person => {
    const request = axios.post(url, person)
    return request.then(response => response.data)
}

const deleteContact = person => {
    axios.delete(`${url}/${person.id}`)
}

const updateNum = (id, person) => {
    const request = axios.put(`${url}/${id}`, person)
    return request.then(response => response.data)

}


export default { readAll, addContact, deleteContact, updateNum }