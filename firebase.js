import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBtjcKsdIL2SwRmOZpzzzTYfXNeas7QOiw",
  authDomain: "krushisetu-76914.firebaseapp.com",
  projectId: "krushisetu-76914",
  storageBucket: "krushisetu-76914.firebasestorage.app",
  messagingSenderId: "825417847279",
  appId: "1:825417847279:web:d28496751449b526e4661a"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Handle form submit
document.getElementById("farmerForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const state = document.getElementById("state").value;

  try {
    await addDoc(collection(db, "farmers"), { name, phone, state });
    alert("Form submitted successfully!");
    e.target.reset();
  } catch (error) {
    console.error("Error submitting form: ", error);
    alert("Failed to submit form. Try again.");
  }
});
