// Firebase Setup
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
// Constants: Buttons
const signOutButton = document.querySelector("#signOutButton");
const signUpButton = document.querySelector("#registerButton");
const passwordResetButton = document.querySelector("#passwordResetButton");
// Constants: Input Fields
const email = document.querySelector('#emailInput');
const password = document.querySelector("#passwordInput");
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const address = document.querySelector('#address');
const state = document.querySelector('#state');
const city = document.querySelector('#city');
const zip = document.querySelector('#zip');
const phone = document.querySelector('#phone');
const inputElements = [email, firstName, lastName, address, state, city, zip, phone, password];
// ON SIGN UP BUTTON CLICK: Sign Up
signUpButton.addEventListener('click', e => {
    e.preventDefault();
    const definedElements = [];
    inputElements.forEach(element => definedElements.push(element.value.trim()));
    [emailVal, firstNameVal, lastNameVal, addressVal, stateVal, cityVal, zipVal, homePhoneVal, passwordVal] = definedElements;
    const data = {
        emailVal,
        firstNameVal,
        lastNameVal,
        cityVal,
        addressVal,
        stateVal,
        zipVal,
        homePhoneVal
    };
    registrationValidation(data,passwordVal);
});
// Registration Validation
function registrationValidation(dataObj, userPassword){  
    let breakFlag = null;
    for(let property in dataObj){
        // INVALID: Special Characters
        if(/[^a-zA-Z0-9@\-\/\s\.]/.test(dataObj[property])){
            $("#invalid-modal .modal-body p").text("There appears to be an error with your input. Please make sure you have completed all of the input fields and you are not using symbols within your text.");
            $("#invalid-modal").modal("show");
            breakFlag = true;
            break;
        }; 
        // INVALID: Undefined
        if(dataObj[property] === "" || undefined){
            $("#invalid-modal .modal-body p").text("There appears to be an error with your input. Please make sure you have completed all of the input fields and you are not using symbols within your text.");
            $("#invalid-modal").modal("show");
            breakFlag = true;
            break;
        };
    };
    if(breakFlag === true){
        return;
    };
    const promise = auth.createUserWithEmailAndPassword(dataObj.emailVal,userPassword).then(() => {
        const currentUser = firebase.auth().currentUser;
        const uId = currentUser.uid;
        dataObj.firebaseId = uId;
        currentUser.updateProfile({
            displayName: dataObj.firstNameVal
        });
        postUserInput(dataObj);
        $("#register-modal").modal("hide");
    }).catch(e => {
        if(e){
            $("#invalid-modal .modal-body p").text(e.message),
            $("#invalid-modal").modal("show")
        }
    });
};
// POST: User Input /userData
function postUserInput(data){
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/userData", true);
    xhr.setRequestHeader("Content-type","application/json");
    xhr.send(JSON.stringify(data));
};
// ON PASSWORD RESET BUTTON CLICK: Submit Email
passwordResetButton.addEventListener('click', e => {
    e.preventDefault();
    const emailVal = document.querySelector("#resetPasswordEmail").value.trim();
    let emailPromise = new Promise(() => (resolve, reject) => {
        () => resolve(emailVal);
    }).then(
        auth.sendPasswordResetEmail(emailVal).then(() => {
            alert(`A reset email has been sent to ${emailVal}`);
            $("#reset-modal").modal("hide");
        }).catch(error => {
            alert(error);
        })
    );
});
// ON SIGN OUT BUTTON CLICK: Sign Out
signOutButton.addEventListener('click', e => {
    firebase.auth().signOut();
    $("#signOut-modal").modal("hide");
});
// ON AUTH STATE CHANGED
firebase.auth().onAuthStateChanged(currentUser => {

    if (currentUser) {   
        $("#logIn").attr("style", "display:none");
        $("#register").attr("style", "display:none");
        $("#signOut").attr("style", "display:block").text("Sign Out");
        $("#createTicket").attr("style", "display:block").text("Create Ticket");
      $.ajax({ url: `/api/user/${currentUser.uid}`, method: "GET" }).done(response => {
            $("#navbarDropdown").text(`Welcome back, ${response.firstName} ${response.lastName}`);
    
        $("#open-ticket").attr("style", "display:block").text("New Ticket");
        $("#open-dash").attr("style", "display:block").text("Dashboard");
        $("#my-profile").attr("style", "display:block").text("Profile");
        
      });
      

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