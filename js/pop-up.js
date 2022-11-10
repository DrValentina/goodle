let buttonOpt = document.querySelector(".banner__button--opt");
let popUpOpt = document.querySelector(".pop-up__opt");

let buttonProvider = document.querySelector(".banner__button--provider");
let popUpProvider = document.querySelector(".pop-up__provider");

let buttonExitOpt = document.querySelector(".button__exit--opt");
let buttonExitProvider = document.querySelector(".button__exit--provider");

buttonOpt.addEventListener("click", function () {
  popUpOpt.classList.remove("visually-hidden");
  buttonExitOpt.addEventListener("click", function() {
    popUpOpt.classList.add("visually-hidden");
  })
})

buttonProvider.addEventListener("click", function () {
  popUpProvider.classList.remove("visually-hidden");
  buttonExitProvider.addEventListener("click", function() {
    popUpProvider.classList.add("visually-hidden");
  })
})
