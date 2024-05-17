const BASE_URL = "http://localhost:3000/"

import axios from 'axios';

export async function getAll() {
    let result = {
        res: null,
        error: null
    };
    await axios.get(BASE_URL)
        .then(function (response) {
            result = { ...result, res: response }
        })
        .catch(function (error) {
            console.log(error);
            result = { ...result, error: error }
        })
    return result
}

export async function getOne(id) {
    let result = {
        res: null,
        error: null
    };
    axios.get(`${BASE_URL}+/${id}`)
        .then(function (response) {
            result = { ...result, res: response.data }
        })
        .catch(function (error) {
            result = { ...result, error: error }
        })
    return result

}


export async function delOne(id) {
    let result = {
        res: null,
        error: null
    };
    await axios.delete(BASE_URL + `/${id}`)
        .then(function (response) {
            result = { ...result, res: response.data }
        })
        .catch(function (error) {
            result = { ...result, error: error }
        })
    return result

}

export async function patchOne(id, payload) {
    let result = {
        res: null,
        error: null
    };
    await axios.patch(BASE_URL + `/${id}`, payload)
        .then(function (response) {
            result = { ...result, res: response }
        })
        .catch(function (error) {
            result = { ...result, error: error }
        })
}

export async function post(payload) {
    let result = {
        res: null,
        error: null
    };

    await axios.post(BASE_URL, payload)
        .then(function (response) {
            result = { ...result, res: response.data }
        })
        .catch(function (error) {
            result = { ...result, error: error }
        })
    return result
}