document.addEventListener('DOMContentLoaded', function() {
  var carousel = document.getElementById('carouselExampleSlidesOnly');
  var bootstrapCarousel = new bootstrap.Carousel(carousel, {
      interval: 5000
  });

  carousel.addEventListener('slid.bs.carousel', function () {
      var activeItem = carousel.querySelector('.carousel-item.active');
      var title = activeItem.getAttribute('data-title');
      var description = activeItem.getAttribute('data-description').replace(/\n/g, '<br>');
      var title = activeItem.getAttribute('data-title').replace(/\n/g, '<br>');

      document.getElementById('project-title').textContent = title;
      document.getElementById('project-description').innerHTML = description;
  });
});