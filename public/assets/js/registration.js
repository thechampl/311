// need to make a passwordConfirmation Dom hook
// need to make a function to validate that that passwordInput
// and passwordConfirmation are ===

const config = {
    apiKey: "AIzaSyDUKEzdKpJQ3aCrue8FDXIHolQV6iQC_EM",
    authDomain: "project2-d7753.firebaseapp.com",
    databaseURL: "https://project2-d7753.firebaseio.com",
    projectId: "project2-d7753",
    storageBucket: "project2-d7753.appspot.com",
    messagingSenderId: "92644411279"
};
firebase.initializeApp(config);

const auth = firebase.auth();
const currentUser = firebase.auth().currentUser;
// const loginButton = document.querySelector("#loginButton");
const signOutButton = document.querySelector("#signOutButton");
const signUpButton = document.querySelector("#registerButton");
const passwordResetButton = document.querySelector("#passwordResetButton");
const email = document.querySelector('#emailInput');
const password = document.querySelector("#passwordInput");
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const address = document.querySelector('#address');
const state = document.querySelector('#state');
const city = document.querySelector('#city');
const zip = document.querySelector('#zip');
const phone = document.querySelector('#phone');
const inputElements = [email, firstName, lastName, address, state, city, zip, password];

// Sign up function works
signUpButton.addEventListener('click', e => {
    e.preventDefault();
    const definedElements = [];
    inputElements.forEach( element => definedElements.push(element.value.trim()));
    [emailVal, firstNameVal, lastNameVal, addressVal, stateVal, cityVal, zipVal, passwordVal] = definedElements;
    const data = {
        emailVal,
        firstNameVal,
        lastNameVal,
        cityVal,
        addressVal,
        stateVal,
        zipVal
    };
    console.log(data);
    registrationValidation(data, passwordVal);

});

// input validation error modal is display behind registration modal

function registrationValidation(dataObj, userPassword) {  
    let breakFlag = null;
    for(let property in dataObj) {
        // Validates that no symbols are in a property value
        if ( /[^a-zA-Z0-9@\-\/\s\.]/.test( dataObj[property] )) {
            console.log(dataObj[property], "alphanumeric error");
            $("#invalid-modal .modal-body p").text("There appears to be an error with your input. Please make sure you have completed all of the input fields and you are not using symbols within your text.");
            $("#invalid-modal").modal("show");
            breakFlag = true;
            break;
        }; 
        // Validates that all input fields contain some value
        if (dataObj[property] === "" || undefined) {
            console.log(dataObj[property], "value error");
            $("#invalid-modal .modal-body p").text("There appears to be an error with your input. Please make sure you have completed all of the input fields and you are not using symbols within your text.");
            $("#invalid-modal").modal("show");
            breakFlag = true;
            break;
        };
    };
    if(breakFlag === true) {
        return;
    };
    const promise = auth.createUserWithEmailAndPassword(dataObj.emailVal, userPassword)
        .then(() => {
            const currentUser = firebase.auth().currentUser;
            const uId = currentUser.uid;
            dataObj.firebaseId = uId;
            currentUser.updateProfile({
                displayName: dataObj.firstNameVal
            });
            postUserInput(dataObj);
            $("#register-modal").modal("hide");
    }).catch(e => {if(e){$("#invalid-modal .modal-body p").text(e.message),$("#invalid-modal").modal("show")}});
};

// Send user Data object to our server
function postUserInput(data) {
    console.log("sending data to server");
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/userData", true);
    xhr.onload = function () {
        if (this.status === 200) {
            // console.log(this.responseText);
        }
    }
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(data));
};

// Password Reset works
passwordResetButton.addEventListener('click', submitEmail);

function submitEmail(e) {
    e.preventDefault();
    const emailVal = document.querySelector("#resetPasswordEmail").value.trim();
    let emailPromise = new Promise(() => (resolve, reject) => {
        () => resolve(emailVal);
    }).then(
        auth.sendPasswordResetEmail(emailVal).then( () => {
            alert(`A reset email has been sent to ${emailVal}`);
            $("#reset-modal").modal("hide");
        }).catch(function (error) {
            alert(error);
        })
    );
};

signOutButton.addEventListener('click', e => {
    firebase.auth().signOut();
    $("#signOut-modal").modal("hide");
});

firebase.auth().onAuthStateChanged(currentUser => {


 
    if (currentUser) {  

        $("#navbarDropdown").text("This will display UserName from Firebase") 
        $("#logIn").attr("style", "display:none");
        $("#register").attr("style", "display:none");
        $("#signOut").attr("style", "display:block").text("Sign Out");
        $("#createTicket").attr("style", "display:block").text("Create Ticket");
        $.ajax({
            url: "/api/user/" + currentUser.uid,
            method: "GET"
        }).done(function (response) {
            $("#navbarDropdown").text(`Welcome back, ${response.firstName} ${response.lastName}`);
        });
        $("#open-ticket").attr("style", "display:block").text("New Ticket");
        $("#open-dash").attr("style", "display:block").text("Dashboard");
        $("#my-profile").attr("style", "display:block").text("Profile");
        
        
        console.log(currentUser);


    } else {
        $("#navbarDropdown").attr("style", "display:none");       
        $("#logIn").attr("style", "display:block").text("Log In");
        $("#register").attr("style", "display:block").text("Register");
        $("#signOut").attr("style", "display:none");
        $("#open-ticket").attr("style", "display:none");
        $("#open-dash").attr("style", "display:none");
        $("#my-profile").attr("style", "display:none");
        console.log("firebaseUser not logged in");
    }
});
