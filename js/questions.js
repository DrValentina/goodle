let question = document.querySelectorAll(".questions__box")
let questionButton = document.querySelectorAll(".questions__question-btn");
let answer = document.querySelectorAll(".questions__answer");

for(let i = 0; i <= question.length; i++) {
  questionButton[i].addEventListener("click", function(){
    answer[i].classList.toggle("visually-hidden");
  })
}
