import React, { Fragment, useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import logo from "../assets/navBrand.png";
import image from "../assets/signup.png";
import useForm from "./useForms";
import validate from "./signupFormValidations";


const Signup = ({ setAuth }) => {
  const history = useHistory();
  const {
    values,
    errors,
    onChange,
    onSubmitForm,
  } = useForm(signup, validate, setAuth);

  function signup() {
    console.log('No errors, submit callback called!');
  }

  const [inputs, setInputs] = useState({
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
  } = inputs;

  return (
    <div className="p-3">
      <div className="row pl-3" style={{ "text-align": "center" }}>
        <div className=" col-4">
          <div
            type="button"
            className="p-4"
            onClick={() => history.push("/")}
            id="nav-brand"
            style={{ "text-align": "left", fontSize: "50px" }}
          >
            prep4
            <span style={{ fontSize: "50px" }} className="span">
              PM
            </span>
            <img src={logo} style={{ width: 60, marginTop: -7 }} />
          </div>
          <div
            className="p-4"
            style={{ "text-align": "left", fontSize: "30px" }}
          >
            Become a Part of <strong>PM</strong> Community.
          </div>
          <img
            className="pr-3"
            id="img-job-interview"
            src={image}
            alt="signup image"
          />
        </div>
        <div
          className=" col-7 main"
          style={{
            "box-shadow":
              "-4px -4px 8px rgba(0, 0, 0, 0.12), 4px 4px 8px rgba(0, 0, 0, 0.12)",
            "border-radius": "10px",
          }}
        >
          <form onSubmit={onSubmitForm}>
            <div className="row">
              <div className="col">
                 
                <div style={{ "text-align": "left" }} className="p-1">
                <label for="name" className="pr-4">
                    *Name:
                  </label>
                  <input
                    style={{ paddingTop: "3px" }}
                    type="text"
                    name="name"
                    value={values.name}
                    placeholder="Name"
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
                  
                <div style={{ "text-align": "left" }} className="p-1">
                <label for="email" className="pr-4">
                    *Email:
                  </label>
                  <input
                    style={{ paddingTop: "3px" }}
                    className={`input ${errors.email && 'is-danger'}`}
                    type="text"
                    name="email"
                    value={values.email}
                    placeholder="email"
                    onChange={(e) => onChange(e)}
                    required
                  />
                   {errors.email && (
                    <p id= "errormsg">{errors.email}</p>
                  )}
                </div>
                  
                <div style={{ "text-align": "left" }} className="p-1">
                <label for="Education" className="pr-4">
                    *Education_Qualification:
                  </label>
                  <input
                    style={{ paddingTop: "3px" }}
                    type="text"
                    name="educational_qualification"
                    value={values.educational_qualification}
                    placeholder="e.g : M.Tech, B.Tech"
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
                  
                <div style={{ "text-align": "left" }} className="p-1">
                <label for="Designation" className="pr-4">
                    *Current_Designation:
                  </label>
                  <input
                    style={{ paddingTop: "3px" }}
                    type="text"
                    name="curr_designation"
                    value={values.curr_designation}
                    placeholder="e.g : Developer"
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
                
                <div style={{ "text-align": "left" }} className="p-1">
                <label for="Organization" className="pr-4">
                    *Current_Organization:
                  </label>
                  <input
                    style={{ paddingTop: "3px" }}
                    type="text"
                    name="curr_organisation"
                    value={values.curr_organisation}
                    placeholder="e.g : Google, amazon"
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
               
                <div style={{ "text-align": "left" }} className="p-1">
                <label for="Domain" className="pr-4">
                    Domain:
                  </label>
                  <input
                    style={{ paddingTop: "3px" }}
                    type="text"
                    name="domain"
                    value={values.domain}
                    placeholder="e.g: Development. Database"
                    onChange={(e) => onChange(e)}
                  />
                </div>
                
                <div style={{ "text-align": "left" }} className="p-1">
                <label for="Skills" className="pr-4">
                    Skills:
                  </label>
                  <input
                    type="text"
                    name="skills"
                    style={{ paddingTop: "3px" }}
                    value={values.skills}
                    placeholder="e.g: Javascript, React"
                    onChange={(e) => onChange(e)}
                  />
                </div>
                
                <div style={{ "text-align": "left" }} className="p-1">
                <label for="Experience" className="pr-4">
                    *Total Experience:
                  </label>
                  <input
                    type="text"
                    name="experience"
                    style={{ paddingTop: "3px" }}
                    value={values.experience}
                    placeholder="e.g: 1, 3 ,10"
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
                
                <div style={{ "text-align": "left" }} className="p-1 wrap-input100 validate-input" data-validate = "password is required">
                <label for="Password" className="pr-4">
                    *Password:
                  </label>
                  <input
                    type="password"
                    name="password"
                    className={`input ${errors.password && 'is-danger'}`}
                    style={{ paddingTop: "3px" }}
                    value={values.password}
                    placeholder="password"
                    onChange={(e) => onChange(e)}
                    required
                  />
                  {errors.password && (
                  <p id="errormsg" >{errors.password}</p>
                )}
                </div>
                
                <div style={{ "text-align": "left" }} className="p-1" data-validate= "re-type password is required">
                <label for="Retype Password" className="pr-4">
                    *Retype Password:
                  </label>
                  <input
                    type="password"
                    name="retype_password"
                    style={{ paddingTop: "3px" }}
                    value={values.retype_password}
                    placeholder="retype password"
                    onChange={(e) => onChange(e)}
                    required
                  />
                  { errors.retype_password  && (
                  <p id="errormsg">{ errors.retype_password }</p>
                )}
                 
                </div>
              </div>
            </div>
            <div className="pt-1 pl-3">
              <input type="checkbox"></input> I agree to the{" "}
              <a href="/">Terms</a> of use and{" "}
              <a href="/">Privacy Policy.</a>
            </div>
            <div className="pt-3" style={{ "text-align": "center" }}>
              <button
                style={{ minWidth: "190px", color: "white", padding: "6px" }}
                id="btn-practice"
              >
                Sign Up
              </button>
              <a className="pl-2" href="/">
                Learn More
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
