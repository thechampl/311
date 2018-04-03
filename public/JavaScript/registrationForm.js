  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDUKEzdKpJQ3aCrue8FDXIHolQV6iQC_EM",
    authDomain: "project2-d7753.firebaseapp.com",
    databaseURL: "https://project2-d7753.firebaseio.com",
    projectId: "project2-d7753",
    storageBucket: "project2-d7753.appspot.com",
    messagingSenderId: "92644411279"
};
firebase.initializeApp(config);


// on sign up
// Create Promise 

// hit firebase auth to make a new user
// .then
// send 


// DOM hooks
const loginButton = document.querySelector("#loginButton");
const signUpButton = document.querySelector("#signUpButton");
const form = document.querySelector("#registerForm");

// Button created for logged in users
const signOutButton = document.createElement("button");
const buttonText = document.createTextNode("Sign Out");

const currentUser = firebase.auth().currentUser;

// This will work for a login button
loginButton.addEventListener('click', e => {
    e.preventDefault();
    const auth = firebase.auth();
    const email = document.querySelector('#emailInput');
    const emailVal = email.value.trim();
    const password = document.querySelector("#passwordInput");
    const passwordVal = password.value.trim();
    const promise = auth.signInWithEmailAndPassword(emailVal, passwordVal);
    promise.catch(e => console.log(e.message));

    email.value = "";
    password.value = "";
})

// Sign up function
signUpButton.addEventListener('click', e => {
    e.preventDefault();
    const auth = firebase.auth();
    const email = document.querySelector('#emailInput').value.trim();
    const password = document.querySelector("#passwordInput").value.trim();

    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
})

signOutButton.addEventListener('click', e => {
    firebase.auth().signOut();
});

firebase.auth().onAuthStateChanged(currentUser => {
    if (currentUser) {
        console.log(currentUser);
        // hide the other buttons when a user is logged in
        loginButton.style.display = "none";
        signUpButton.style.display = "none";
        // Append signout button to form
        signOutButton.classList.add("btn");
        signOutButton.classList.add("btn-outline-danger");
        signOutButton.appendChild(buttonText);
        form.appendChild(signOutButton);
    } else {
        console.log("firebaseUser not logged in");
    }
});








// button.addEventListener("click", postUserInput);

// function userInput(event) {
//     event.preventDefault();
//     const userName = document.querySelector("#nameInput").value.trim();
//     const userEmail = document.querySelector("#emailInput").value.trim();
//     const userPassword = document.querySelector("#passwordInput").value.trim();

//     const data = {
//         userName,
//         userEmail,
//     };

//     return data;
// }


function postUserInput() {
    // Store user Data object to a variable
    const userData = userInput(event);
    // Create a new instance of an xmlhttprequest object
    const xhr = new XMLHttpRequest();
    // set parameters on method, route, and async
    xhr.open("POST", "/userData", true);
    // What happens when we get a response back from server
    xhr.onload = function() {
        if (this.status === 200) {
            console.log(this.responseText);
        }
    }
    // defines the content type. Else req.body will be empty after the request
    xhr.setRequestHeader("Content-type", "application/json");
    // send data
    xhr.send(JSON.stringify(userData));
}

