document.getElementById("form1").addEventListener("submit", (e) => {
  e.preventDefault();
});

let details = [];

const validatePassword = (password, confirmPassword) => {
  if (
    password.length > 0 &&
    confirmPassword.length > 0 &&
    password === confirmPassword
  ) {
    return true;
  } else {
    return false;
  }
};

const addDetail = (ev) => {
  ev.preventDefault(); //to stop the form submitting
  let detail = {
    id: Date.now(),
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    confirmPassword: document.getElementById("confirmPassword").value,
  };

  if (validatePassword(detail.password, detail.confirmPassword)) {
    details.push(detail);
    document.forms[0].reset();
    console.log(detail);
    localStorage.setItem("details", JSON.stringify(details));
  } else {
    alert("form details invalid");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("form1").addEventListener("submit", addDetail);
});
