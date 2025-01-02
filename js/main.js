document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault(); // Відміна стандартної поведінки

        // Знаходимо цільовий елемент (секцію)
        const targetElement = document.querySelector(this.getAttribute("href"));

        // Встановлюємо відступ для фіксованого навбару
        const navbarHeight = document.querySelector('.navbar').offsetHeight; // Висота навбару
        const offset = -navbarHeight*200; // Коригуємо відступ по висоті навбару

        // Скролимо до цільового елемента з відступом
        window.scrollTo({
            top: targetElement.offsetTop + offset, // Використовуємо offset для коригування позиції
            behavior: 'smooth' // Плавна прокрутка
        });
    });
});



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
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('a[href="#comprar"]').addEventListener('click', function (event) {
        event.preventDefault(); // Запобігає стандартній прокрутці

        const targetElement = document.querySelector('#comprar');
        const offset = window.innerHeight / 2 - targetElement.offsetHeight / 2 * 1.2;

        window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: 'smooth', // Плавна прокрутка
        });
    });
});