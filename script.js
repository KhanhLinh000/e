window.onload = function() {
    var projectSlides = document.querySelectorAll('.project-slide');
    var videoThumbnails = document.querySelectorAll('.video-thumbnail');
    var activeIndex = 0;

    function showSlide(index) {
        projectSlides.forEach(function(slide) {
            slide.classList.remove('active');
        });
        videoThumbnails.forEach(function(thumb) {
            thumb.classList.remove('active');
        });
        projectSlides[index].classList.add('active');
        videoThumbnails[index].classList.add('active');
    }

    function nextSlide() {
        activeIndex++;
        if (activeIndex === projectSlides.length) {
            activeIndex = 0;
        }
        showSlide(activeIndex);
    }

    setInterval(nextSlide, 5000);

    videoThumbnails.forEach(function(thumbnail, index) {
        thumbnail.addEventListener('click', function() {
            activeIndex = index;
            showSlide(activeIndex);
        });
    });
};
