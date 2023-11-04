import axios from "axios"
import React, { useEffect } from "react"
import { UseProtetedPage } from "../../Hooks/UseProtetedPage"



const DetailsPage = () => {

    UseProtetedPage()

    useEffect(() => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/aurelio/trip/fM93Q5NuUhbrJszkmRy6'

        const headers = {
            headers : {
                auth : localStorage.getItem('token')
            }
        }

        axios.get(url, headers)
        .then(res => {
            console.log(res.data.trip)
        })
        .catch(err => {
            console.log(err.response.data.message)
            alert(err.response.data.message)
        })
    }, [])

    return(
        <>
            <h2>DetailsPage</h2>
        </>
    )
}
export default DetailsPage