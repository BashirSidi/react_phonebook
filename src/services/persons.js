import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data;
}

const create = async newObject => {
    return await axios.post(baseUrl, newObject)
}

// const update = (id, newObject) => {
//     return axios.put(`${baseUrl}/${id}`, newObject)
// }

// eslint-disable-next-line
export default { getAll, create }