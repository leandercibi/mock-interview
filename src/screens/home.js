import Button from "react-bootstrap/Button";
import React, { useState, useEffect } from "react";
import NavbarBeforeSignUp from "../components/navbarBeforeSignUp";
import NavbarBrand from "../components/navbarBrand";
import Testimonials from "../components/testimonials";
import { useHistory } from "react-router-dom";
import NavbarAfterSignUp from "../components/navbarAfterSignUp";
import image from "../assets/home.png";
import Footer from "../components/footer";

const Home = (props) => {
  console.log("entered home");
  const history = useHistory();
  const checkAuthenticated = async () => {
    try {
      const res = await fetch(
        "https://heypm-backend-demo.herokuapp.com/authentication/verify",
        {
          method: "POST",
          headers: { jwt_token: localStorage.token },
        }
      );

      const parseRes = await res.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  console.log("till here");
  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  return (
    <div  id="home">
    <div className="p-4">
      {isAuthenticated ? (
        <NavbarAfterSignUp setAuth={setAuth} />
      ) : (
        <NavbarBeforeSignUp />
      )}
      {/* build actual products */}
      
      <div className="row container-fluid">
        {/* left side */}
        <div className="col-6">
          <div className="heading-starting">
            Prepare for your Product Management career
          </div>
          <div className="text-block">
          Practice with our MENTORS for your next PM interview! Learn from interview stories and our curated resources.
          </div>
          <div className="text-block text-1">
          Learn, Inspire and Grow. Let's get started!
          </div>
          
          <div className="row container-fluid">
            <div className="col-3 ml-2 mr-2 p-3">
              <Button
                id="btn-practice"
                className="btn"
                
                onClick={() => history.push("/interviewWithMentor")}
              >
                Practice Ground
              </Button>
            </div>
            <div className="col-3 ml-5 p-3">
              <Button
                id="btn-practice"
                className="btn"
                href="https://heypm-interview-experience.webflow.io/"
              >
                Interview Substack
              </Button>
            </div>
          </div>
        </div>
        {/* image */}
        <div className="col-6">
          <img id="img-job-interview" src={image} alt="job interview image" />
        </div>
      </div>
      {/* testimonals */}
      <Testimonials />
      {/* links */}
      </div>
      <Footer/>
    </div>
    
  );
};

export default Home;
