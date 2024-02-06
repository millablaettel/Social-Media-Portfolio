function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

function showSchedule(day) {
    var selectedSchedule = document.getElementById(day + 'Schedule');

    if (selectedSchedule.style.display === 'block') {
        selectedSchedule.style.display = 'none'; // Wenn der Tag bereits angezeigt wird, ausblenden
    } else {
        // Verberge alle anderen Stundenpläne
        var schedules = document.querySelectorAll('.schedule-content');
        schedules.forEach(function (schedule) {
            schedule.style.display = 'none';
        });

        // Zeige den ausgewählten Stundenplan
        selectedSchedule.style.display = 'block';
    }
}

