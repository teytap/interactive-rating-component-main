const submitBtn = document.getElementById("submit-btn");
const message = document.getElementById("message");
const ratingPage = document.getElementById("rating-page");
const rateResult = document.getElementById("rate-number");
const rateBtn1 = document.getElementById("rate-btn1");
const rateBtn2 = document.getElementById("rate-btn2");
const rateBtn3 = document.getElementById("rate-btn3");
const rateBtn4 = document.getElementById("rate-btn4");
const rateBtn5 = document.getElementById("rate-btn5");
const ratingState = document.getElementById("container");
const rateBtns = ["rateBtn1", "rateBtn2", "rateBtn3", "rateBtn4", "rateBtn5"];
let isRated = false;
let rateNumber = 5;
function rateSubmit() {
  if (isRated == true) {
    message.style.display = "block";
    ratingPage.style.display = "none";
    rateResult.innerHTML = rateNumber;
  } else {
    alert("Please,choose an number");
  }
}

submitBtn.addEventListener("click", rateSubmit);
rateBtn1.addEventListener("click", function () {
  rateNumber = 1;
  isRated = true;
  rateBtn1.style.background = "hsl(25, 97%, 53%)";
  rateBtn2.style.background = "hsl(217, 10%, 41%)";
  rateBtn3.style.background = "hsl(217, 10%, 41%)";
  rateBtn4.style.background = "hsl(217, 10%, 41%)";
  rateBtn5.style.background = "hsl(217, 10%, 41%)";
});
rateBtn2.addEventListener("click", function () {
  rateNumber = 2;
  isRated = true;
  rateBtn2.style.background = "hsl(25, 97%, 53%)";
  rateBtn1.style.background = "hsl(25, 97%, 53%)";
  rateBtn3.style.background = "hsl(217, 10%, 41%)";
  rateBtn4.style.background = "hsl(217, 10%, 41%)";
  rateBtn5.style.background = "hsl(217, 10%, 41%)";
});
rateBtn3.addEventListener("click", function () {
  rateNumber = 3;
  isRated = true;
  rateBtn3.style.background = "hsl(25, 97%, 53%)";
  rateBtn2.style.background = "hsl(25, 97%, 53%)";
  rateBtn1.style.background = "hsl(25, 97%, 53%)";
  rateBtn4.style.background = "hsl(217, 10%, 41%)";
  rateBtn5.style.background = "hsl(217, 10%, 41%)";
});
rateBtn4.addEventListener("click", function () {
  rateNumber = 4;
  isRated = true;
  rateBtn4.style.background = "hsl(25, 97%, 53%)";
  rateBtn2.style.background = "hsl(25, 97%, 53%)";
  rateBtn1.style.background = "hsl(25, 97%, 53%)";
  rateBtn3.style.background = "hsl(25, 97%, 53%)";
  rateBtn5.style.background = "hsl(217, 10%, 41%)";
});
rateBtn5.addEventListener("click", function () {
  rateNumber = 5;
  isRated = true;
  rateBtn5.style.background = "hsl(25, 97%, 53%)";
  rateBtn4.style.background = "hsl(25, 97%, 53%)";
  rateBtn2.style.background = "hsl(25, 97%, 53%)";
  rateBtn1.style.background = "hsl(25, 97%, 53%)";
  rateBtn3.style.background = "hsl(25, 97%, 53%)";
});
