const submitBtn = document.getElementById("submit-btn");
const rateBtn1 = document.getElementById("rate-btn1");
const rateBtn2 = document.getElementById("rate-btn2");
const rateBtn3 = document.getElementById("rate-btn3");
const rateBtn4 = document.getElementById("rate-btn4");
const rateBtn5 = document.getElementById("rate-btn5");
const ratingState = document.getElementById("container");

let rateNumber = 0;
function rateSubmit() {
  ratingState.innerHTML = `<img
        src="images/illustration-thank-you.svg"
        alt="thank-you"
        class="thank-you"
      />
  <div class="rate-result">You selected ${rateNumber}
out of 5</div> <h2>Thank you!</h2> <div class="rate-thank-message">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</div>`;
}

submitBtn.addEventListener("click", rateSubmit);
rateBtn1.addEventListener("click", function () {
  rateNumber = 1;
  rateBtn1.style.background = "hsl(25, 97%, 53%)";
  rateBtn2.style.background = "hsl(216, 12%, 54%)";
  rateBtn3.style.background = "hsl(216, 12%, 54%)";
  rateBtn4.style.background = "hsl(216, 12%, 54%)";
  rateBtn5.style.background = "hsl(216, 12%, 54%)";
});
rateBtn2.addEventListener("click", function () {
  rateNumber = 2;
  rateBtn2.style.background = "hsl(25, 97%, 53%)";
  rateBtn1.style.background = "hsl(25, 97%, 53%)";
  rateBtn3.style.background = "hsl(216, 12%, 54%)";
  rateBtn4.style.background = "hsl(216, 12%, 54%)";
  rateBtn5.style.background = "hsl(216, 12%, 54%)";
});
rateBtn3.addEventListener("click", function () {
  rateNumber = 3;
  rateBtn3.style.background = "hsl(25, 97%, 53%)";
  rateBtn2.style.background = "hsl(25, 97%, 53%)";
  rateBtn1.style.background = "hsl(25, 97%, 53%)";
  rateBtn4.style.background = "hsl(216, 12%, 54%)";
  rateBtn5.style.background = "hsl(216, 12%, 54%)";
});
rateBtn4.addEventListener("click", function () {
  rateNumber = 4;
  rateBtn4.style.background = "hsl(25, 97%, 53%)";
  rateBtn2.style.background = "hsl(25, 97%, 53%)";
  rateBtn1.style.background = "hsl(25, 97%, 53%)";
  rateBtn3.style.background = "hsl(25, 97%, 53%)";
  rateBtn5.style.background = "hsl(216, 12%, 54%)";
});
rateBtn5.addEventListener("click", function () {
  rateNumber = 5;
  rateBtn5.style.background = "hsl(25, 97%, 53%)";
  rateBtn4.style.background = "hsl(25, 97%, 53%)";
  rateBtn2.style.background = "hsl(25, 97%, 53%)";
  rateBtn1.style.background = "hsl(25, 97%, 53%)";
  rateBtn3.style.background = "hsl(25, 97%, 53%)";
});
