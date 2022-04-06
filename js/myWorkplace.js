var url = "https://localhost:44344";

window.onload = async function showWorkerReservations() {

    var response = await fetch(url + "/api/Bookings", {
        method: "Get",
        mode: 'cors',
        credentials: "include",
        headers: {
            "Accept": 'application/json',
            'Content-Type': 'application/json'
        },
    })

    var userBookings = await response.json();

    if (response.status == 200) {
        var creationPlace = document.getElementById('myWorkplaces');

        for (var i in userBookings) {
            var Workplace = document.createElement('div');
            Workplace.id = userBookings[i].bookingId;
            Workplace.className = "col-12";

            var WorkplaceRow = document.createElement('div');
            WorkplaceRow.className = "row";



            var WorkplaceDate = document.createElement('div');
            WorkplaceDate.className = "col workplace-decoratots";
            WorkplaceDate.innerHTML = "from: " + formatDate(userBookings[i].startDate) + "<br>to: " + formatDate(userBookings[i].endDate);

            var WorkplaceLocation = document.createElement('div');
            WorkplaceLocation.className = "col workplace-decoratots";
            WorkplaceLocation.innerHTML = userBookings[i].locationName;

            var WorkplaceTime = document.createElement('div');
            WorkplaceTime.className = "col workplace-decoratots";
            WorkplaceTime.innerHTML = "from: " + userBookings[i].startDate.split('T')[1] + "<br>to: " + userBookings[i].endDate.split('T')[1];

            var WorkplaceBookedPlace = document.createElement('div');
            WorkplaceBookedPlace.className = "col workplace-decoratots";
            WorkplaceBookedPlace.innerHTML = userBookings[i].placeName;

            var WorkplaceDelete = new Image(20, 20);
            WorkplaceDelete.id = userBookings[i].bookingId;

            WorkplaceDelete.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8AAABzc3NUVFRNTU1cXFympqaEhIQ0NDTu7u4UFBRoaGjo6Oitra21tbUICAgzMzO8vLxGRkbi4uL29vYqKiqdnZ3MzMx7e3s5OTny8vJwcHCNjY1iYmJZWVmTk5PX19fJyckdHR3xSjGKAAACyUlEQVR4nO3dYVeiQBSA4cAyWRsEAYUMs/7/j9yVU5vMDCKzM17b3vdr9+Q8WqSOnbm7IyIiIiKib1y5VfPLU9tSesFTy7NoWlkqveRpqYm+Y9+KWLw7CN8L6WVPaO4AjKKN9LInVDsJa+FVl8nlLZ2Eywm34P/Sm9SLX5e3chKuJtxCUz/5BRaV05pDVnm9MD030h5LzbNHYSqtsebzD6jbtTF0Pq+9btfG0C0RIkQoHkKECOVDiBChfAgRIpQPIUKE8vkU7qQx1nYehRtpjDWfe1WF20ZE2FZe39Z/leZY8rzd6LbnGTLv+6mJerylVOIbSERERPRflbZNtpAqa9rQn9EsW+kn3FEb9tPEt/Bi3+dLe6NcWteVBxS+SOO6XgIKY2lcV4wQIULxECJEKJ+YcJYWT8eKfODp+T7/HNjbB9rPgXR2i8LT51LWf107fRveupmlTgbOPT8UEva3Ky07OfHYd3rtDZzZlBUS9re6krGBwhxIxgZkhY02uR4bMP4LZz02ICy81yYf9IGZNmBcSx60gXuECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIcIfJNRPpzAA+l1gAPS7wDghQ1hYaSdLZsaA9q0qfSDrf700BoSFUf980K050D+X0XJW5LY3kA7flJCw6h0TY/klWpw+yuXCHOj9HCfDD6HYaUjrw9+xwnrg0/5r4GA98Kn9OmznMPxbKHlm13Kujs3j1cDA7mNg6LzWVfwxcOYoJFHhtUKIEKF8CBH+bGEtjeuqAwqtR09evc34Qp07SOO6DgGFN/EghnwI/6TOvKq5SpUaX+S/Vb6puVzqrRxfIhERERERXb/fJ/13l9UGjcAAAAAASUVORK5CYII=";
            WorkplaceDelete.addEventListener('click', deleteReservation, false)

            WorkplaceBookedPlace.appendChild(WorkplaceDelete);

            WorkplaceRow.appendChild(WorkplaceDate);
            WorkplaceRow.appendChild(WorkplaceTime);
            WorkplaceRow.appendChild(WorkplaceLocation);
            WorkplaceRow.appendChild(WorkplaceBookedPlace);

            Workplace.appendChild(WorkplaceRow);

            creationPlace.appendChild(Workplace);

        }
    }
    else {
        alert(response.value)
    }
}

async function deleteReservation(evt) {

    var rowToDelete = document.getElementById(evt.currentTarget.id);

    var response = await fetch(url + "/api/Bookings?id=" + evt.currentTarget.id, {
        method: "Delete",
        mode: 'cors',
        credentials: "include",
        headers: {
            "Accept": 'application/json',
            'Content-Type': 'application/json'
        },
    });

    await response;

    if (response.status == 200) {
        rowToDelete.remove();
    }
    else {
        alert(response.value)
    }
}

function createWeek(currnetDate) {
    var first = currnetDate.getDate() - currnetDate.getDay() + 1;
    var last = first + 6;

    var firstday = new Date(currnetDate.setDate(first));
    var lastday = new Date(currnetDate.setDate(last));

    return firstday + "-" + lastday;
}

function previousWeek(week) {

}

function nextWeek(week) {

}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}