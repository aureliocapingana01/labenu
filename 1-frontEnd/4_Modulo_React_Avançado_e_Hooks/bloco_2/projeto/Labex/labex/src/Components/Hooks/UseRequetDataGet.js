import { useEffect, useState } from "react"
import axios from "axios"


export const UseRequestDataGet = url => {
    
   const [data, setData] = useState(undefined)
   const [isLoanding, setIsLoanding] = useState(false)
   const [error, setError] = useState('')

   useEffect(() => {
    getData()
   }, [])

   const getData = () => {
    setIsLoanding(true)

    axios.get(url)
    .then(res => {
        setIsLoanding(false)
        setData(res.data.trips)
    })
    .catch(err => {
        setIsLoanding(false)
        setError(err)
    })
   }

   return [data, isLoanding, error]
} 
