import { useState, useEffect, useRef } from "react";

const useForm = (props) => {
  const formRef = useRef(true);

  const [state, setState] = useState(props.formValue);
  const formValues = Object.keys(props.formData);
  useEffect(() => {
    console.log("state = ", state);
    console.log("formValues = ", formValues);
  }, []);
  return { state, setState };
};

export default useForm;
