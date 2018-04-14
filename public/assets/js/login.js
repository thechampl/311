// Constants
const loginButton = document.querySelector("#loginButton");
const loginEmail = document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#loginPassword");

// ON CLICK: Login Button
loginButton.addEventListener('click', e => {
  e.preventDefault();
  const emailVal = loginEmail.value.trim();
  const passwordVal = loginPassword.value.trim();
  const loginObj = {
    emailVal,
    passwordVal
  }
  loginValidation(loginObj);
  $("#login-modal").modal("hide");
});

function loginValidation(dataObj) {
  let breakFlag = null;
  for (let property in dataObj) {
    // INVALID: Special Characters
    if (typeof (dataObj[property]) !== 'object') {
      if (/[^a-zA-Z0-9@\-\/\s\.]/.test(dataObj[property]) || dataObj[property] === "") {
        $("#invalid-modal").modal("show");
        breakFlag = true;
        break;
      };
    }
    // INVALID: Undefined
    if (dataObj[property] === "" || undefined) {
      $("#invalid-modal").modal("show");
      breakFlag = true;
      break;
    };
  };
  if (breakFlag === true) {
    return;
  };
  const promise = auth.signInWithEmailAndPassword(dataObj.emailVal, dataObj.passwordVal);
  promise.catch(e => console.log(e.message));
};