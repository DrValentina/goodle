window.addEventListener('load', function () {
  const buttonLeft = document.querySelector('.carousel__button--left');
  const buttonRight = document.querySelector('.carousel__button--right');
  const carouselList = document.querySelector('.partners__list');
  let carouselItem = document.querySelectorAll('.partners__item');

  let counter = 0;

  buttonRight.addEventListener('click', function() {
    const stepSize = carouselItem[0].clientWidth;
    if(counter >= carouselItem.length-3) {
      counter = -1;
    };
    carouselList.classList.add('partners-transform-animation');
    counter++;
    carouselList.style.transform = 'translateX(' + `${-stepSize * counter}` + 'px)';
  });

  buttonLeft.addEventListener('click', function() {
    const stepSize = carouselItem[0].clientWidth;
    if(counter <= 0) {
      counter = carouselItem.length;
    };
    carouselList.classList.add('partners-transform-animation');
    counter--;
    carouselList.style.transform = 'translateX(' + `${-stepSize * counter}` + 'px)';
  });
});
