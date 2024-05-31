import axios from 'axios'
import { useState } from 'react'
import getRandomNumber from '../services/getRandomNumber'

const useFecth = (endpoint) => {

    const [results, setResults] = useState()
    const [inputError, setInputError] = useState(false)

    console.log(endpoint)
    const getApi = () => {
        axios.get(endpoint)
        .then(res => {
            setResults(res.data)
            setInputError(false)
            
        })
        .catch(err => {
            console.log(err)
            setInputError(true)
        })
    }

    return ( [results, getApi, inputError] )
}

export default useFecth