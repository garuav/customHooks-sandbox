import { useState, useEffect } from "react";

const useForm = ({ formData, formValue }) => {
  const [state, setState] = useState(formValue);
  const [error, setError] = useState({ isInValidForm: true });
  const formValues = Object.keys(formData);
  useEffect(() => {
    console.log("state = ", state);
    console.log("formValues = ", formValues);
  }, []);

  const handleChange = (e) => {
    const { value, name } = e.target;
    const { pattern = null } = formData[name].validators;
    if (formData[name].validators) {
      if (pattern) {
        const regexp = new RegExp(pattern);
        if (!regexp.test(value)) {
          setError({
            [name]: true,
            isInValidForm: true,
            errorMessage: `Please enter  valid ${[name]}`
          });
        } else {
          setError({
            [name]: false,
            isInValidForm: false,
            errorMessage: ``
          });
        }
      } else if (name === "confirmPassword" || name === "password") {
        const passwordValue =
          name === "confirmPassword" ? state.password : state.confirmPassword;
        if (passwordValue !== value) {
          setError({
            confirmPassword: true,
            isInValidForm: true,
            errorMessage: `Password mismatch`
          });
        } else {
          setError({
            confirmPassword: false,
            isInValidForm: false,
            errorMessage: ``
          });
        }
      }
    }
    setState({
      ...state,
      [name]: value
    });
  };

  return [state, error, handleChange];
};

export default useForm;
