const footerBtn = document.querySelector(".footer-btn");
const footer = document.querySelector(".footer");
footerBtn.addEventListener("click", function () {
  footer.classList.toggle("active");
});


const questions = document.querySelectorAll('.question-title');
const answers = document.querySelectorAll('.question-answer');
const icons = document.querySelectorAll('.btn-open');

function selectItem(e){
  // removeRotate();
  // removeShow();
  const icon = document.querySelector(`#${this.id}-icon`);
  icon.classList.toggle('rotate')
  // icon.classList.add('rotate')
  const answer = document.querySelector(`#${this.id}-content`);
  answer.classList.toggle('show');
  // answer.classList.add('show');
  
}

function removeRotate(){
  icons.forEach(icon=> icon.classList.remove('rotate'))
}
function removeShow(){
  answers.forEach(answer=> answer.classList.remove('show'))
}

questions.forEach(question=> question.addEventListener('click', selectItem));

