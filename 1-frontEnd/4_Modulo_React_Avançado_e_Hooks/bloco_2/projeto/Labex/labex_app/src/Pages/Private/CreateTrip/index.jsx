import { Link } from "react-router-dom"
import { ButtonContainer } from "../../../Home/style"
import { ButtonOne } from "../../../Components/Hooks/Button/ButtonOne"

const CreateTripPage = () => {
    return(
        <>
            CreateTripPage

            <ButtonContainer>
                <Link to={'/tripList'}>
                    <ButtonOne text={'Voltar'}/>
                </Link>
            </ButtonContainer>
        </>
    )
}

export default CreateTripPage