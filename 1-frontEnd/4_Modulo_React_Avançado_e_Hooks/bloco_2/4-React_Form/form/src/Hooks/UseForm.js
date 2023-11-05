import { useState } from "react";

export const useForm = initialState => {
    const [form, setForm] = useState(initialState)

    const controlInputs = e => {
        const {name, value} = e.target;
        setForm({...form, [name] : value})
    }

    const cleanFields = () => {
        setForm(initialState)
    }

    return {form, controlInputs, cleanFields}
}