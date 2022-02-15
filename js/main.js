function openNav() {
  document.getElementById("Sidepanel").style.width = "10%";
}

function closeNav() {
  document.getElementById("Sidepanel").style.width = "0%";
}

window.onload = function createContentFromJson() {
  // jsonInfo = await fetch("", {
  //   method: "get",
  //   headers: { "Accept": "application/json" }
  // });
  jsonInfo = [
    {
      "Id": "1",
      "IsReserved": "true",
    },
    {
      "Id": "2",
      "IsReserved": "false",
    },
    {
      "Id": "3",
      "IsReserved": "true",
    },
    {
      "Id": "4",
      "IsReserved": "false",
    },
    {
      "Id": "5",
      "IsReserved": "false",
    },
    {
      "Id": "6",
      "IsReserved": "false",
    }
  ]


  var creationPlace = document.getElementById('workplaceSelection');
  for (let e = 0; e < 6; e++) {
    for (var i in jsonInfo) {

      var newWorkplace = document.createElement('newWorkplace');
      newWorkplace.className = "workplace-picture col";
      newWorkplace.setAttribute("id", jsonInfo[i].Id);

      if (jsonInfo[i].IsReserved) {
        var workplaceImg = new Image(150, 150);
        workplaceImg.src = "http://placehold.jp/150x150.png";
      }
      else {
        var workplaceImg = document.createElement("activeWorkplacePicture");
        workplaceImg.src = "http://placehold.jp/100f1f/f2f2f2/150x150.png";
      }

      newWorkplace.appendChild(workplaceImg);
      creationPlace.appendChild(newWorkplace);
    }
  }
}




async function reservePlace(email, password, response) {

  response = await fetch("/api/ValuesApi/Autentification?login=" + email.value + "&password=" + password.value, {
    method: "post",
    headers: { "Accept": "application/json" }
  });

  const error = await response.json();

  if (response.status == 200) {
    alert("Place was reserved");
  }
  else {
    alert(JSON.stringify(error));
  }
}