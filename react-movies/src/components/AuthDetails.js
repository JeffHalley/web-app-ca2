import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { auth } from "../firebase";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        navigate("/"); // Redirect to homepage when signed in
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, [navigate]); // Add navigate to dependencies

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
        navigate("/signin"); // Redirect to the sign-in page after sign-out
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {authUser ? (
        <>
          <p>{`Signed In as ${authUser.email}`}</p>
          <button onClick={userSignOut}>Sign Out</button>
        </>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  );
};

export default AuthDetails;
