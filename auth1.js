import { auth, createUserWithEmailAndPassword } from "./firebase.js";

document.getElementById("signup").addEventListener("submit", (e) => {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Signup successful! Redirecting to login...");
      window.location.href = "./index1.html";
    })
    .catch((error) => {
      alert(error.message);
    });
});
