window.onload = function showWorkerReservations() {
    var currnetDate = new Date; // get current date
    var stringWeek = createWeek(currnetDate);


    //document.getElementById("date").innerHTML = stringWeek;
    jsonInfo = [
        {
            "PlaceId": "1",
            "Date": "11 December",
            "Location": "Minks",
            "Time": "10.25-16.00",
            "BookedPlace": "desk id:MIAR2121"
        },
        {
            "PlaceId": "2",
            "Date": "12 December",
            "Location": "Moscow",
            "Time": "10.24-16.00",
            "BookedPlace": "desk id:MIAR2121"
        },
        {
            "PlaceId": "3",
            "Date": "13 December",
            "Location": "St Siterb.",
            "Time": "10.25-16.00",
            "BookedPlace": "desk id:MIAR2121"
        },
        {
            "PlaceId": "4",
            "Date": "14 December",
            "Location": "Omsk",
            "Time": "10.25-16.00",
            "BookedPlace": "desk id:MIAR2121"
        },
    ]

    var creationPlace = document.getElementById('myWorkplaces');
    for (let e = 0; e < 6; e++) {
        for (var i in jsonInfo) {
            var Workplace = document.createElement('div');
            Workplace.id = jsonInfo[i].PlaceId;
            Workplace.className = "col";

            var WorkplaceDate = document.createElement('div');
            WorkplaceDate.id = jsonInfo[i].PlaceId;
            WorkplaceDate.className = "col-3";
            WorkplaceDate.innerHTML = jsonInfo[i].Date;

            var WorkplaceLocation = document.createElement('div');
            WorkplaceLocation.id = jsonInfo[i].PlaceId;
            WorkplaceLocation.className = "col-3";
            WorkplaceLocation.innerHTML = jsonInfo[i].Location;

            var WorkplaceTime = document.createElement('div');
            WorkplaceTime.id = jsonInfo[i].PlaceId;
            WorkplaceTime.className = "col-3";
            WorkplaceTime.innerHTML = jsonInfo[i].Time;

            var WorkplaceBookedPlace = document.createElement('div');
            WorkplaceBookedPlace.id = jsonInfo[i].PlaceId;
            WorkplaceBookedPlace.className = "col-3";
            WorkplaceBookedPlace.innerHTML = jsonInfo[i].BookedPlace;

            var WorkplaceDelete = new Image(20, 20);
            WorkplaceDelete.id = jsonInfo[i].PlaceId;

            WorkplaceDelete.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8AAABzc3NUVFRNTU1cXFympqaEhIQ0NDTu7u4UFBRoaGjo6Oitra21tbUICAgzMzO8vLxGRkbi4uL29vYqKiqdnZ3MzMx7e3s5OTny8vJwcHCNjY1iYmJZWVmTk5PX19fJyckdHR3xSjGKAAACyUlEQVR4nO3dYVeiQBSA4cAyWRsEAYUMs/7/j9yVU5vMDCKzM17b3vdr9+Q8WqSOnbm7IyIiIiKib1y5VfPLU9tSesFTy7NoWlkqveRpqYm+Y9+KWLw7CN8L6WVPaO4AjKKN9LInVDsJa+FVl8nlLZ2Eywm34P/Sm9SLX5e3chKuJtxCUz/5BRaV05pDVnm9MD030h5LzbNHYSqtsebzD6jbtTF0Pq+9btfG0C0RIkQoHkKECOVDiBChfAgRIpQPIUKE8vkU7qQx1nYehRtpjDWfe1WF20ZE2FZe39Z/leZY8rzd6LbnGTLv+6mJerylVOIbSERERPRflbZNtpAqa9rQn9EsW+kn3FEb9tPEt/Bi3+dLe6NcWteVBxS+SOO6XgIKY2lcV4wQIULxECJEKJ+YcJYWT8eKfODp+T7/HNjbB9rPgXR2i8LT51LWf107fRveupmlTgbOPT8UEva3Ky07OfHYd3rtDZzZlBUS9re6krGBwhxIxgZkhY02uR4bMP4LZz02ICy81yYf9IGZNmBcSx60gXuECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIcIfJNRPpzAA+l1gAPS7wDghQ1hYaSdLZsaA9q0qfSDrf700BoSFUf980K050D+X0XJW5LY3kA7flJCw6h0TY/klWpw+yuXCHOj9HCfDD6HYaUjrw9+xwnrg0/5r4GA98Kn9OmznMPxbKHlm13Kujs3j1cDA7mNg6LzWVfwxcOYoJFHhtUKIEKF8CBH+bGEtjeuqAwqtR09evc34Qp07SOO6DgGFN/EghnwI/6TOvKq5SpUaX+S/Vb6puVzqrRxfIhERERERXb/fJ/13l9UGjcAAAAAASUVORK5CYII=";
            WorkplaceDelete.addEventListener('click', deleteReservation, false)

            creationPlace.appendChild(WorkplaceDate);
            creationPlace.appendChild(WorkplaceTime);
            creationPlace.appendChild(WorkplaceLocation);
            creationPlace.appendChild(WorkplaceBookedPlace);
            WorkplaceBookedPlace.appendChild(WorkplaceDelete);

        }
    }

}

function deleteReservation(evt) {
    var divToDelete = document.getElementById(evt.currentTarget.id);

    for (let e = 0; e < 4; e++) {
        var divToDelete = document.getElementById(evt.currentTarget.id);
        divToDelete.remove();
    }

}

function createWeek(currnetDate) {
    var first = currnetDate.getDate() - currnetDate.getDay() + 1; // First day is the day of the month - the day of the week
    var last = first + 6; // last day is the first day + 6

    var firstday = new Date(currnetDate.setDate(first));
    var lastday = new Date(currnetDate.setDate(last));

    return firstday + "-" + lastday;
}

function previousWeek(week) {

}

function nextWeek(week) {

}