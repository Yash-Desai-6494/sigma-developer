const endDate = "29 Feb 2024 02:44 PM";

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

const clock = () => {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;
  if (diff <= 0) {
    document.getElementById("end-date").innerText = "WE ARE LIVE";
    document.querySelector(".col").style.display = "none";
    document.querySelector(".title").style.display = "none";
    return
  }
  inputs[0].value = Math.floor(diff / 3600 / 24);
  inputs[1].value = Math.floor(diff / 3600) % 24;
  inputs[2].value = Math.floor(diff / 60) % 60;
  inputs[3].value = Math.floor(diff) % 60;
};

clock();

setInterval(() => {
  clock();
}, 1000);
