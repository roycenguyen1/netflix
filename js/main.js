const footerBtn = document.querySelector(".footer-btn");
const footer = document.querySelector(".footer");
footerBtn.addEventListener("click", function () {
  footer.classList.toggle("active");
});

const btnOpens = document.querySelectorAll(".btn-open");
const answers = document.querySelectorAll(".question-answer");

function selectItem(e) {
  this.classList.toggle("show");
  showAnswer();
  // answers.forEach((answer) => answer.classList.toggle("reveal"));
}

function showAnswer() {
  answers.forEach((answer) => answer.classList.toggle("reveal"));
}

btnOpens.forEach((btn) => {
  btn.addEventListener("click", selectItem);
});
