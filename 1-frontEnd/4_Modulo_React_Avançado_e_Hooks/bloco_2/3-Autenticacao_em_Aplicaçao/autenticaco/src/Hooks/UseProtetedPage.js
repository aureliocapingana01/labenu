import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const UseProtetedPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if(token === null) {
            navigate('/')
        }
    }, [navigate])
}