import { useParams } from "react-router-dom"


const UserPage = () => {

    const {id} = useParams()

    return (
        <>
            <h1>UserPage</h1>
            <p>Pagina do usuário com id: {id}</p>
        </>
    )
}
export default UserPage