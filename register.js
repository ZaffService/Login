import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcUODDrcFiU_-g7lQ508Tevu6TzlSYi-M",
  authDomain: "vote-53fee.firebaseapp.com",
  projectId: "vote-53fee",
  storageBucket: "vote-53fee.appspot.com",
  messagingSenderId: "921638650024",
  appId: "1:921638650024:web:65d8f4044c9b5fd7b0429d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the authentication object
const auth = getAuth();

// Get references to the email, password, and submit button elements
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submit');

// Add an event listener to the submit button
submitButton.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default form behavior

  // Get the values of the email and password inputs when the button is clicked
  const email = emailInput.value;
  const password = passwordInput.value;

  // Display an alert with the value 5
  alert("Creating Account...");

  // Create a new user with email and password
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // User signed up successfully
    const user = userCredential.user;
    alert("Account created successfully!");
    // Additional actions after successful account creation
  })
  .catch((error) => {
    // Handle errors during user creation
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });
});
