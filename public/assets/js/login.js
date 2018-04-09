const loginButton = document.querySelector("#loginButton");
const loginEmail = document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#loginPassword");

loginButton.addEventListener('click', e => {
    e.preventDefault();
    const emailVal = loginEmail.value.trim();
    const passwordVal = loginPassword.value.trim();
    const promise = auth.signInWithEmailAndPassword(emailVal, passwordVal);
    promise.catch(e => console.log(e.message));
    console.log($("#login-modal"));
    $("#login-modal").modal("hide");
});