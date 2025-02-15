import { auth, signInWithEmailAndPassword } from "./firebase.js";

document.getElementById("adminlogin").addEventListener("submit", (e) => {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Admin Login successful! Redirecting...");
      window.location.href = "./ADMIN/ADhome.html";
    })
    .catch((error) => {
      alert(error.message);
    });
});
