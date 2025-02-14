import {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "./firebase.js";
  
  let signup = document.getElementById("Userlogin");
  
  signup.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = e.target[0].value;
    let password = e.target[1].value;
    // let retypePassword = e.target[2].value;
  
    // if(password !== retypePassword) {
    //   alert("Passwords do not match!");
    //   return;
    // }
  
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User signed up:", userCredential.user);
        alert("Signin successful! Redirecting to Home page...");
  
        window.location.href = "../USER/home.html";
      })
      .catch((error) => {
        console.error("Error:", error.message);
        alert(error.message);
      });
  });
  