const aboutUs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const scroll = entry.target.querySelector('.about-us__title');
    if (entry.isIntersecting) {
      scroll.classList.add('about-us__title--animation');
	  return; // если класс добавлен, продолжать уже не надо
    }
    // перемещение завершено, теперь надо удалить класс
    scroll.classList.remove('about-us__title--animation');
  });
});
aboutUs.observe(document.querySelector('.about-us'));

const specifics = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const scroll = entry.target.querySelector('.specifics__title');
    if (entry.isIntersecting) {
      scroll.classList.add('specifics__title--animation');
	  return; // если класс добавлен, продолжать уже не надо
    }
    // перемещение завершено, теперь надо удалить класс
    scroll.classList.remove('specifics__title--animation');
  });
});
specifics.observe(document.querySelector('.specifics'));

const questions = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const scroll = entry.target.querySelector('.questions__title');
    if (entry.isIntersecting) {
      scroll.classList.add('questions__title--animation');
	  return; // если класс добавлен, продолжать уже не надо
    }
    // перемещение завершено, теперь надо удалить класс
    scroll.classList.remove('questions__title--animation');
  });
});
questions.observe(document.querySelector('.questions'));

const experts = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const scroll = entry.target.querySelector('.experts__title');
    if (entry.isIntersecting) {
      scroll.classList.add('experts__title--animation');
	  return; // если класс добавлен, продолжать уже не надо
    }
    // перемещение завершено, теперь надо удалить класс
    scroll.classList.remove('experts__title--animation');
  });
});
experts.observe(document.querySelector('.experts'));
