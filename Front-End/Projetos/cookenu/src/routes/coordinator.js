
//Difini as rotas das paginas 

export const goToLogin = (history) => {
    history.push("/login")
}

export const goToSignUp = (history) => {
    history.push("/cadastro")
}

export const goToAddReci = (history) => {
    history.push("/adicionar-receita")
}

export const goToReciDetalhe = (history, id) => {
    history.push(`/detalhe/${id}`)
}

export const goToReciList = (history) => {
    history.push("/")
}