import {  useState } from 'react'
import { v4 as uuid } from "uuid";

import axios from 'axios'

const useAxios = (url) => {
    
    const [response, setResponse] = useState([])
   
    
    const addResponse = async (options=false) => {
        
        console.log( options)
        const res = await axios.get(options ? url + options : url)
        
        setResponse(data => [...data, {...res.data, id: uuid()}])
    }

    const reset = () => setResponse([])
    


    return [response, addResponse, reset]
}

export default useAxios