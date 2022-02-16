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
    }
  ]
  floorCreation(floorsInfo);

  var creationPlace = document.getElementById('workplaceSelection');
  for (let e = 0; e < 6; e++) {
    for (var i in jsonInfo) {

      var newWorkplace = document.createElement('newWorkplace');
      newWorkplace.className = "workplace-picture col-2";
      //newWorkplace.setAttribute("id", jsonInfo[i].Id);

      var workplaceInfo = document.createElement('span')
      workplaceInfo.innerHTML = jsonInfo[i].PlaceName;
      workplaceInfo.innerHTML = jsonInfo[i].ReserveTime;

      if (jsonInfo[i].IsReserved == "false") {
        var workplaceImg = new Image(250, 250);
        workplaceImg.src = "https://placehold.jp/250x250.png";
        workplaceImg.addEventListener('click', reservePlace, false)
      }
      else {
        var workplaceImg = new Image(250, 250);
        workplaceImg.src = "https://placehold.jp/3d4070/ffffff/250x250.png";
      }

      workplaceImg.addEventListener('mouseenter', showPlaceInfo, false)
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

  var popup = evt.currentTarget;
  popup.classList.toggle("show");

}

function reservePlace(evt) {
  if (confirm("Would you like to book this place?")) {
    evt.currentTarget.src = "http://placehold.jp/100f1f/f2f2f2/250x250.png";
    evt.currentTarget.removeEventListener('click', reservePlace)
  }
}