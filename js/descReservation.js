var userChooise;
var url = "https://localhost:44344";
var locationId = "ed4bd13e-bf7c-4261-8306-65f59a3d4d99";
var layerId = null;
var spaceId = null;
var startDate = new Date;
var endDate = new Date;

var startDateField = document.getElementById("startDate");
var endDateField = document.getElementById("endDate");

var startTimeField = document.getElementById("startTime");
var endTimeField = document.getElementById("endTime");

startDateField.addEventListener('change', onDateChanged);
endDateField.addEventListener('change', onDateChanged);
startTimeField.addEventListener('change', onDateChanged);
endTimeField.addEventListener('change', onDateChanged);
document.getElementById("locations").addEventListener('change', changeLocation);

startDateField.value = startDate.toISOString().split('T')[0];
endDateField.value = startDate.toISOString().split('T')[0];

window.onload = async function createContentFromJson() {

  blockPassedDates();
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
  getLocations();
  floorCreation(floorsInfo);

  var response = await fetch(url + "/api/Locations/" + locationId + "/places", {
    method: "Get",
    mode: 'cors',
    credentials: "include",
    headers: {
      "Accept": 'text/plain',
      'Content-Type': 'application/json'
    },
  })

  createWorkplaces(response)
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

async function reserveConfirm() {

  if (confirm("Would you like to book this place?")) {
    var target = document.getElementById(userChooise);

    var startDateToSend = startDateField.value + "T" + startTimeField.value + ":00";
    var endDateToSend = endDateField.value + "T" + endTimeField.value + ":00";

    var response = await fetch(url + "/api/Bookings", {
      method: "Post",
      mode: 'cors',
      credentials: "include",
      headers: {
        "Accept": 'text/plain',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        placeId: userChooise,
        startDate: startDateToSend,
        endDate: endDateToSend
      })
    })

    if (response.status == 200) {
      target.src = "https://placehold.jp/8a0a0a/ffffff/200x200.png";
      target.removeEventListener('click', reservePlace)
      userChooise = null;
    }
    else {
      alert(response.value);
    }
  }

}

function blockPassedDates() {
  var dtToday = new Date();
  var maxDate = dtToday.toISOString().substr(0, 10);

  $('#startDate').attr('min', maxDate);
  $('#endDate').attr('min', maxDate);
}


async function onDateChanged() {
  $('#endDate').attr('min', startDateField.value);
  $('#endTime').attr('min', endTimeField.value);

  if (endDateField.value < startDateField.value) {
    endDateField.value = startDateField.value;
  }

  if (endTimeField.value < startTimeField.value) {
    endTimeField.value = startTimeField.value;
  }

  var parent = document.getElementById("workplaceSelection")
  while (parent.firstChild) {
    parent.firstChild.remove()
  }

  var startDateToSend = startDateField.value + " " + startTimeField.value;
  var endDateToSend = endDateField.value + " " + endTimeField.value;

  var response = await fetch(url + "/api/Locations/" + locationId + "/places?startDate=" + startDateToSend + "&endDate=" +
    endDateToSend, {
    method: "Get",
    mode: 'cors',
    credentials: "include",
    headers: {
      "Accept": 'text/plain',
      'Content-Type': 'application/json'
    },
  })

  createWorkplaces(response);
}

async function createWorkplaces(response) {
  var jsonInfo = await response.json();
  var creationPlace = document.getElementById('workplaceSelection');

  for (var i in jsonInfo) {

    var newWorkplace = document.createElement('div');
    newWorkplace.className = "workplace-picture col-2 container card-style";

    var workplaceImg = new Image(200, 200);
    workplaceImg.id = jsonInfo[i]["id"]

    if (jsonInfo[i].status == "Active") {

      workplaceImg.id = jsonInfo[i]["id"]
      workplaceImg.src = "https://placehold.jp/008044/ffffff/200x200.png";
      workplaceImg.addEventListener('click', reservePlace, false)
    }
    else if (jsonInfo[i].status == "Inactive") {
      workplaceImg.src = "https://placehold.jp/555562/ffffff/200x200.png";
    }
    else {
      workplaceImg.src = "https://placehold.jp/8a0a0a/ffffff/200x200.png";
    }

    var workplaceInfo = document.createElement('div');
    workplaceInfo.className = "overlay";
    workplaceInfo.innerHTML = jsonInfo[i].name;

    newWorkplace.appendChild(workplaceInfo);
    newWorkplace.appendChild(workplaceImg);
    creationPlace.appendChild(newWorkplace);
  }
}

async function getLocations() {

  var response = await fetch(url + "/api/Locations", {
    method: "Get",
    mode: 'cors',
    credentials: "include",
    headers: {
      "Accept": 'text/plain',
      'Content-Type': 'application/json'
    }
  })

  var locations = await response.json();

  var selectButton = document.getElementById("locations")

  for (var i in locations) {
    var opt = document.createElement('option');
    opt.value = locations[i].id;
    opt.innerHTML = locations[i].name;
    selectButton.appendChild(opt);
  }
}

function changeLocation() {
  locationId = document.getElementById("locations").value;
  onDateChanged();
}