window.onload = function createContentFromJson() {
    blockPassedDates();
}

function blockPassedDates() {
    var dtToday = new Date();
    var maxDate = dtToday.toISOString().substr(0, 10);

    $('#startDate').attr('min', maxDate);
    $('#endDate').attr('min', maxDate);
}