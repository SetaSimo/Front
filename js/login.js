async function login(email, password) {
  // response = await fetch("https:/localhost:5001/api/ValuesApi/Autentification?login=" + email.value + "&password=" + password.value, {
  //   method: "post",
  //   headers: { "Accept": "application/json" }
  // });
  window.location.href = "file:///C:/Users/Seon/Downloads/Front/MyWork.html";
}

function showPassword() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
