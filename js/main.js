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
      //newWorkplace.setAttribute("id", jsonInfo[i].Id);

      if (jsonInfo[i].IsReserved == "false") {
        var workplaceImg = new Image(150, 150);
        workplaceImg.src = "http://placehold.jp/150x150.png";
        workplaceImg.addEventListener('click', reservePlace, false)
      }
      else {
        var workplaceImg = new Image(150, 150);
        workplaceImg.src = "http://placehold.jp/100f1f/f2f2f2/150x150.png";
      }

      newWorkplace.appendChild(workplaceImg);
      creationPlace.appendChild(newWorkplace);
    }
  }
}




function reservePlace(evt) {
  // response = await fetch("/api/ValuesApi/Autentification?login=" + email.value + "&password=" + password.value, {
  //   method: "post",
  //   headers: { "Accept": "application/json" }
  // });

  console.log(evt.currentTarget.src);
  evt.currentTarget.src = "http://placehold.jp/100f1f/f2f2f2/150x150.png";
}