import { useEffect, useState } from "react";
import axios from "axios";

export const UseRequestData = url => {
  const [data, setData] = useState(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const [err, setErr] = useState('')

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    setIsLoading(true)
    axios.get(url)
    .then(res => {
      setIsLoading(false)
      setData(res.data)
    })
    .catch(err => {
      setIsLoading(false)
      setErr(err)
    })
  }

  return [data, isLoading, err]
}
