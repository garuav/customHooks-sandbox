import { useState, useEffect, useRef } from "react";

const useForm = (props) => {
  const formRef = useRef(true);

  const [state, setState] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const formValues = Object.keys(props.formData);
  useEffect(() => {
    console.log("state = ", state);
    console.log("formValues = ", formValues);
  }, []);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setState({
      ...state,
      [name]: value
    });
  };
  return { state, handleChange };
};

export default useForm;
