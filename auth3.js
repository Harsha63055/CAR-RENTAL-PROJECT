import {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "./firebase.js";
  
  let signup = document.getElementById("Usersignup");
  
  signup.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = e.target[0].value;
    let password = e.target[1].value;
    // let retypePassword = e.target[2].value;
  
    // if(password !== retypePassword) {
    //   alert("Passwords do not match!");
    //   return;
    // }
  
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User signed up:", userCredential.user);
        alert("Signup successful! Redirecting to User login...");
  
        window.location.href = "./index1.html";
      })
      .catch((error) => {
        console.error("Error:", error.message);
        alert(error.message);
      });
  });
  