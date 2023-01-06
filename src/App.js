const submitBtn = document.getElementById("submit-btn");
const backBtn = document.getElementById("back-btn");
const message = document.getElementById("message");
const firstPage = document.getElementById("first-page");
const rateResult = document.getElementById("rate-number");
const warning = document.querySelector("p");

function handleSubmit(event) {
  event.preventDefault();
  let rating = document.querySelector("input:checked");

  if (rating) {
    firstPage.style.display = "none";
    message.style.display = "block";
    rateResult.innerHTML = rating.value;
  } else {
    warning.innerHTML = "Please select a number before submit";
    warning.style.color = "hsl(25, 97%, 53%)";
    warning.style.paddingTop = "28px";
    warning.style.paddingBottom = "28px";
    warning.style.width = "400px";
  }
}

submitBtn.addEventListener("click", handleSubmit);
backBtn.addEventListener("click", () => {
  firstPage.style.display = "block";
  message.style.display = "none";
});
