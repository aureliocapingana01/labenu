import { Link } from "react-router-dom"
import { ButtonOne } from "../../../Components/Hooks/Button/ButtonOne"
import { ButtonTwe } from "../../../Components/Hooks/Button/ButtonTwe"
import { ButtonContainer } from "../../../Home/style"

const TripListPage = () => {
    return(
        <>
            TripListPage
            <ButtonContainer>
                <Link to={'/'}>
                    <ButtonOne text={'Voltar'}/>
                </Link>
                <Link to={'/createTrip'}>
                    <ButtonTwe text={'Criar Viagen'}/>
                </Link>

            </ButtonContainer>
        </>
    )
}

export default TripListPage