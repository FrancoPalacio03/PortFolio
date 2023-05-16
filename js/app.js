function navigateCarousel(targetId) {
  var carousel = document.getElementById("carouselExample");
  var carouselItems = Array.from(carousel.querySelectorAll('.carousel-item'));
  var targetIndex = carouselItems.findIndex(item => item.querySelector('.carousel-caption > div').id === targetId);
  
  var carouselInstance = new bootstrap.Carousel(carousel);
  carouselInstance.to(targetIndex);
}