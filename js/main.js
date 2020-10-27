const questions = document.querySelectorAll('.question-title');
const answers = document.querySelectorAll('.question-answer');
const icons = document.querySelectorAll('.btn-open');

function selectItem(e){
  const icon = document.querySelector(`#${this.id}-icon`);
  icon.classList.toggle('rotate')
  const answer = document.querySelector(`#${this.id}-content`);
  answer.classList.toggle('show');
}

questions.forEach(question=> question.addEventListener('click', selectItem));


const btnOpen = document.querySelector('.footer-btn');
const ul = document.querySelector('.row-3 ul')

btnOpen.addEventListener('click', function(){ 
  ul.classList.toggle('show')
});