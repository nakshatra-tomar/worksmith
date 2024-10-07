import "./Auth.css";
import React, { useState } from "react";
import SignupForm from "./signup/SignupForm";
import LoginForm from "./login/login";
import { Button } from "@/components/ui/button";

const Auth = () => {
  const [active, setActive] = useState(true);
  return (
    <div className="authContainer">
      <div className="headingSection">
        <h1 className="siteHeading">WorkSmith</h1>
      </div>

      <div className="formSection loginContainer">
        <div className="box h-[30rem] w-[25rem] ">
          <div className="minContainer login ">
            <div className="loginBox w-full px-10 space-y-5">
              {active ? <SignupForm /> : <LoginForm />}

              <div className="flex items-center justify-center flex-col">
                <p>Or</p>
                <Button onClick={() => setActive(!active)} variant="ghost">
                  {active ? "Sign In" : "Sign Up"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
