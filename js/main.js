var url = "https://localhost:44344";

function openNav() {
  document.getElementById("Sidepanel").style.width = "10%";
}

function closeNav() {
  document.getElementById("Sidepanel").style.width = "0%";
}

async function Logout() {
  await fetch(url + "/api/authorize/LogOut", {
    method: "POST",
    mode: 'cors',
    headers: {
      "Accept": 'application/json',
      'Content-Type': 'application/json'
    }
  });
  window.location.href = "./index.html";
}