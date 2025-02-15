import { auth, signInWithEmailAndPassword } from "./firebase.js";

document.getElementById("Userlogin").addEventListener("submit", (e) => {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful! Redirecting to Home...");
      window.location.href = "./USER/home.html";
    })
    .catch((error) => {
      alert(error.message);
    });
});
