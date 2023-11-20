import { useState } from "react";

export const UserForm = initialState => {
  const [form, setForm] = useState(initialState)

  const onChangeInput = (e) => {
    const newValue = e.target.value;
    const fieldName = e.target.name;

    setForm({
      ...form,[fieldName]: newValue,
    });
  };

  return [form, onChangeInput]
};
