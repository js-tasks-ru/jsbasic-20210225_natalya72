function initCarousel() {


  let right = document.querySelector('.carousel__arrow_right');
  let left = document.querySelector('.carousel__arrow_left');

  // let images = document.querySelectorAll('.carousel__inner .carousel__slide .carousel__img');
  let carousel = document.querySelector('.carousel__inner');

  // let i = 0;

  // let position = 0;

  right.addEventListener('click', () => {
    carousel.style.transform = 'translateX(-988px)';
  });

  left.addEventListener('click', () => {
    carousel.style.transform = 'translateX(988px)';
  });

}

