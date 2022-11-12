let question = document.querySelectorAll(".questions__box")
let questionButton = document.querySelectorAll(".questions__question-btn");
let answer = document.querySelectorAll(".questions__answer");
let questionImg = document.querySelectorAll(".questions__question-img");

for(let i = 0; i <= question.length; i++) {
  questionButton[i].addEventListener("click", function(){
    answer[i].classList.toggle("visually-hidden");
    if(!answer[i].classList.contains("visually-hidden")){
      questionImg[i].style.transform = "rotate(180deg)";
    } else {
      questionImg[i].style.transform = "rotate(0deg)";
    }
  })
}
