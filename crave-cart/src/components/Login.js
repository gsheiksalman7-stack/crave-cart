import React, { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import Error from "./Error";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSignUp = () => {
    setIsSignInForm(!isSignInForm);
  };

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const confirmPasswordValue = useRef(null);

  const handleClick = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const fullNameValue = isSignInForm ? null : fullName.current?.value;
    const confirmPassword = isSignInForm
      ? null
      : confirmPasswordValue.current?.value;
    if (!isSignInForm && passwordValue !== confirmPassword) {
      setErrorMessage("Passwords does not match");
      return;
    }
    const message = checkValidData(emailValue, passwordValue, fullNameValue);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, emailValue, passwordValue,fullNameValue)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(
            <Error errorCode={errorCode} errorMessage={errorMessage} />
          );
        });
    } else {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(<Error />);
        });
    }
  };

  return (
    <div className="px-4 py-6 max-w-sm mx-auto shadow-md">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="border-2 border-gray-300 p-4 rounded-md flex flex-col gap-2"
      >
        <h1 className="font-bold text-2xl text-center">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <>
            <label className="text-lg font-bold">Full Name:</label>
            <input
              ref={fullName}
              type="text"
              className="border-2 border-gray-400 p-2 rounded"
            />
          </>
        )}
        <label className="text-lg font-bold">Email:</label>
        <input
          ref={email}
          type="email"
          className="border-2 border-gray-400 p-2 rounded"
        />
        <label className="text-lg font-bold">Password:</label>
        <input
          ref={password}
          type="password"
          className="border-2 border-gray-400 p-2 rounded"
        />
        {!isSignInForm && (
          <>
            <label className="text-lg font-bold">Confirm Password:</label>
            <input
              ref={confirmPasswordValue}
              type="password"
              className="border-2 border-gray-400 p-2 rounded"
            />
          </>
        )}
        {errorMessage && (
          <p className="text-red-500 font-semibold text-sm py-2">
            {errorMessage}
          </p>
        )}
        <button
          onClick={handleClick}
          className="bg-red-500 p-2 font-bold my-2 hover:bg-red-400"
        >
          {isSignInForm ? "Log In" : "Sign Up"}
        </button>
        <p onClick={handleSignUp} className="cursor-pointer">
          {isSignInForm
            ? "Don't have an Account? Sign Up"
            : "Already have an Account? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
