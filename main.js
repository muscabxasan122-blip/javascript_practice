let homeScore = 12;
let GuestScore = 5

const homeSCoreEl = document.getElementById("home-score");
const guestScoreEl = document.getElementById("guest-score");

function addScore(team, points) {
    if (team === "home") {
        homeScore += points;
        homeSCoreEl.textContent = homeScore;
    } else if (team === "guest") {
        GuestScore += points;
        guestScoreEl.textContent = GuestScore;
    }
}

addScore()