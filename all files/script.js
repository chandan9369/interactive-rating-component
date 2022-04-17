const options = document.querySelectorAll(".circle");
const section = document.querySelector("section");
const reviewCard = document.querySelector(".review-card");

let rating = 0;

// function to clear selected option

function clear() {
  options.forEach(function (ele) {
    ele.classList.remove("back-change");
  });
}

//selcting rating functionality

options[0].addEventListener("click", function () {
  rating = 0;
  clear();
  options[0].classList.toggle("back-change");
});
options[1].addEventListener("click", function () {
  rating = 1;
  clear();
  options[1].classList.toggle("back-change");
});
options[2].addEventListener("click", function () {
  rating = 2;
  clear();
  options[2].classList.toggle("back-change");
});
options[3].addEventListener("click", function () {
  rating = 3;
  clear();
  options[3].classList.toggle("back-change");
});
options[4].addEventListener("click", function () {
  rating = 4;
  clear();
  options[4].classList.toggle("back-change");
});

// submit functionality
const submit = document.querySelector(".submit-button");

submit.addEventListener("click", function () {
  reviewCard.style.display = "none";

  let html = `<div class="thanks-card">
  <div class="inner-card">
    <!-- thank you image start -->
    <img
      class="thanks-pic"
      src="./images/illustration-thank-you.svg"
      alt="thank-pic"
    />
    <div class="selected-option">
      You selected
      <span id="selected-rating">${rating + 1}</span>
      <!-- Add rating here -->
      out of 5
    </div>
    <p id="thanks-header">Thank you!</p>
    <p>
      We appreciate you taking the time to give a rating. If you ever need
      more support, don't hesitate to get in touch!
    </p>
  </div>
</div>`;

  let newEle = document.createElement("div");
  newEle.innerHTML = html;
  section.append(newEle);
});
