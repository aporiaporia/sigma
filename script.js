document.addEventListener("DOMContentLoaded", function () {
    let today = new Date();
    let formattedDate = today.toLocaleDateString("en-US", { 
        weekday: "long", 
        month: "long", 
        day: "numeric", 
        year: "numeric" 
    });

    document.getElementById("date").innerText = "📅 Today: " + formattedDate;

    let endOfYear = new Date(today.getFullYear(), 11, 31);
    let remainingDays = Math.ceil((endOfYear - today) / (1000 * 60 * 60 * 24));

    document.getElementById("countdown").innerText = "⏳ Year Countdown: " + remainingDays + " days";
});