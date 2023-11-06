import { useState } from "react"


export const UseForm = initialState => {
    const [form, setForm] = useState(initialState)

    const controlInputs = e => {
        const {name, value} = e.target
        setForm({...form, [name] : value})
    }

    const cleanInputs = () => {
        setForm(initialState)
    }

    return {form, controlInputs, cleanInputs}
}