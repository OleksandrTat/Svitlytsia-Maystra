document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('a[href="#about-us"]').addEventListener('click', function (event) {
        event.preventDefault(); // Запобігає стандартній прокрутці

        const targetElement = document.querySelector('#about-us');
        const offset = window.innerHeight / 2 - targetElement.offsetHeight / 2;

        window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: 'smooth', // Плавна прокрутка
        });
    });
}); // скролить на середину блоку