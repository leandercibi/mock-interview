import { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import { useHistory, Link } from "react-router-dom";

const useForm = (callback, validate, {setAuth}) => {
const history = useHistory();
  const [values, setValues] = useState({
    name: "",
    email: "",
    educational_qualification: "",
    curr_designation: "",
    curr_organisation: "",
    domain: "",
    skills: "",
    experience: "",
    password: "",
    retype_password: "",
  });

  const {
    name,
    email,
    educational_qualification,
    curr_designation,
    curr_organisation,
    domain,
    skills,
    experience,
    password,
    retype_password,
  } = values;

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const onSubmitForm = async e => {
    if(e) e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    try {
      console.log('entered here');
      const body = {
        name,
        email,
        educational_qualification,
        curr_designation,
        curr_organisation,
        domain,
        skills,
        experience,
        password,
      };
      const response = await fetch(
        "https://heypm-backend-demo.herokuapp.com/authentication/register",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      const parseRes = await response.json();

      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
        setAuth(true);
        console.log('now here 1')
        const back=()=>history.push('/')
        console.log('now here 2')
        back()
        console.log('now here');
        toast.success("Register Successfully");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };


  const onChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));

  };

  return {
    onChange,
    onSubmitForm ,
    values,
    errors,
  }
};

export default useForm;