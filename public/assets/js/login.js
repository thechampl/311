// Constants
const loginButton = document.querySelector("#loginButton");
const loginEmail = document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#loginPassword");
// ON CLICK: Login Button
loginButton.addEventListener('click', e => {
    e.preventDefault();
    const emailVal = loginEmail.value.trim();
    const passwordVal = loginPassword.value.trim();
    const promise = auth.signInWithEmailAndPassword(emailVal, passwordVal);
    promise.catch(e => console.log(e.message));
    $("#login-modal").modal("hide");
});