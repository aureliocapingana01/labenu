import { Link } from "react-router-dom"
import { ButtonContainer } from "../../../Home/style"
import { ButtonOne } from "../../../Components/Hooks/Button/ButtonOne"
// import { ButtonTwe } from "../../../Components/Hooks/Button/ButtonTwe"

const ApplicationFormPage = () => {
    return(
        <>
             <ButtonContainer>
                <Link to={'/'}>
                    <ButtonOne text={'Voltar'}/>
                </Link>
            </ButtonContainer>
        </>
    )
}

export default ApplicationFormPage