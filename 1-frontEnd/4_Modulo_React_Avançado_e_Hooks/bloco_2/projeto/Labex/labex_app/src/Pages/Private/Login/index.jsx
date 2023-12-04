// import { Link } from "react-router-dom"
import { ButtonContainer } from "../../../Home/style"
import { ButtonOne } from "../../../Components/Hooks/Button/ButtonOne";
import { ButtonTwe } from "../../../Components/Hooks/Button/ButtonTwe";
import { Link } from "react-router-dom";


const LoginPage = () => {
    return(
      <>
          Login
        <ButtonContainer>
          <Link to={'/'}>
            <ButtonOne text={'Voltar'}/>
          </Link>
          <Link to={'/tripList'}>
            <ButtonTwe text={'Entrar'} />
          </Link>


        </ButtonContainer>
      </>
    )
}

export default LoginPage