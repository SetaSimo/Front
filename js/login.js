var url = "https://localhost:44344";

async function login(userEmail, userPassword) {

  var response = await fetch(url + "/api/authorize/LogIn", {
    method: "POST",
    credentials: "include",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: userEmail.value,
      password: userPassword.value
    })
  });

  if (response.status == 200) {
    window.location.href = "./MyWork.html";
  }
  else {
    alert(response.value);
  }
}

function showPassword() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}