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
    // firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
    //     return firebase.auth().signInWithEmailAndPassword(emailVal, passwordVal);
    // }).catch((error) => {
    //     // DO SOMETHING
    // });
    $("#login-modal").modal("hide");
});