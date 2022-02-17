var userChooise;

window.onload = function createContentFromJson() {
  // jsonInfo = await fetch("", {
  //   method: "get",
  //   headers: { "Accept": "application/json" }
  // });
  jsonInfo = [
    {
      "Id": "1",
      "IsReserved": "true",
      "PlaceName": "TestName1",
      "ReserveTime": "12.01.2021 14.00-17.00"
    },
    {
      "Id": "2",
      "IsReserved": "false",
      "PlaceName": "TestName2",
      "ReserveTime": "13.01.2021 14.00-17.00"
    },
    {
      "Id": "3",
      "IsReserved": "false",
      "PlaceName": "TestName3",
      "ReserveTime": "14.01.2021 14.00-17.00"
    },
    {
      "Id": "4",
      "IsReserved": "true",
      "PlaceName": "TestName4",
      "ReserveTime": "15.01.2021 14.00-17.00"
    },
  ]

  floorsInfo = [
    {
      "FloorName": "1"
    },
    {
      "FloorName": "2"
    },
    {
      "FloorName": "3"
    },
    {
      "FloorName": "4"
    },
    {
      "FloorName": "5"
    },
    {
      "FloorName": "Roof"
    }
  ]
  floorCreation(floorsInfo);

  var creationPlace = document.getElementById('workplaceSelection');
  for (let e = 0; e < 10; e++) {
    for (var i in jsonInfo) {

      var newWorkplace = document.createElement('div');
      newWorkplace.className = "workplace-picture col-2";
      //newWorkplace.setAttribute("id", jsonInfo[i].Id);

      var workplaceImg = new Image(200, 200);
      workplaceImg.title = "dada";

      if (jsonInfo[i].IsReserved == "false") {

        workplaceImg.id = jsonInfo[i].Id
        workplaceImg.src = "https://placehold.jp/008044/ffffff/200x200.png";
        workplaceImg.addEventListener('click', reservePlace, false)
      }
      else if (jsonInfo[i].IsReserved == "keep") {
        workplaceImg.src = "https://placehold.jp/200x200.png";
      }
      else {
        workplaceImg.src = "https://placehold.jp/3d4070/ffffff/200x200.png";
      }



      newWorkplace.appendChild(workplaceImg);
      creationPlace.appendChild(newWorkplace);
    }
  }
}

function floorCreation(floorsToAdd) {
  var selectButton = document.getElementById("floor")
  for (var i in floorsToAdd) {
    var opt = document.createElement('option');
    opt.value = floorsToAdd[i].FloorName;
    opt.innerHTML = floorsToAdd[i].FloorName;
    selectButton.appendChild(opt);
  }
}

function showPlaceInfo(evt) {

  evt.currentTarget.getElementsByClassName(names);

}

function reservePlace(evt) {
  if (userChooise == null) {
    userChooise = evt.currentTarget.id;
    var target = document.getElementById(userChooise);
    target.src = "http://placehold.jp/100f1f/f2f2f2/200x200.png";
  } else {
    var target = document.getElementById(userChooise);
    target.src = "https://placehold.jp/008044/ffffff/200x200.png";

    userChooise = evt.currentTarget.id;
    var target = document.getElementById(userChooise);
    target.src = "http://placehold.jp/100f1f/f2f2f2/200x200.png";
  }


}
function reserveConfirm() {
  console.log(userChooise);
  if (confirm("Would you like to book this place?")) {
    var target = document.getElementById(userChooise);
    target.src = "https://placehold.jp/200x200.png";
    target.removeEventListener('click', reservePlace)
    userChooise = null;
  }

}