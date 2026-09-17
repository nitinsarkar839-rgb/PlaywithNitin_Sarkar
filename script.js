// Change this date/time to your real tournament start time.
// Example: "2026-10-10T20:00:00+05:30"
const tournamentDate = "2026-10-10T20:00:00+05:30";

function updateCountdown() {
  const target = new Date(tournamentDate).getTime();
  const now = Date.now();
  let diff = target - now;
  if (Number.isNaN(target)) diff = 0;
  if (diff < 0) diff = 0;

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  document.getElementById("days").textContent = String(days).padStart(2,"0");
  document.getElementById("hours").textContent = String(hours).padStart(2,"0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2,"0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2,"0");
}
setInterval(updateCountdown, 1000);
updateCountdown();

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const team = document.getElementById("team").value.trim();
  const leader = document.getElementById("leader").value.trim();
  const uid = document.getElementById("uid").value.trim();
  const phone = document.getElementById("phone").value.trim();

  const subject = encodeURIComponent("Free Fire Tournament Registration - " + team);
  const body = encodeURIComponent(
    "Hello NITIN SARKAR,%0A%0A" +
    "I want to register my squad for the Free Fire Tournament.%0A%0A" +
    "Team Name: " + team + "%0A" +
    "Team Leader: " + leader + "%0A" +
    "Free Fire UID: " + uid + "%0A" +
    "WhatsApp/Phone: " + phone + "%0A%0A" +
    "Please share the payment and room details."
  );
  window.location.href = `mailto:nitinsarkar839@gmail.com?subject=${subject}&body=${body}`;
});
