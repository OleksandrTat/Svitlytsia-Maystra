document.addEventListener("DOMContentLoaded", () => {
    const logoLinks = document.querySelectorAll('.logo-link');
    
    logoLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Запобігаємо стандартній поведінці посилання

            window.scrollTo({
                top: 0,
                behavior: "smooth", // Плавне прокручування
            });
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


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault(); // Відміна стандартної поведінки

        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return; // Якщо елемента не існує, виходимо

        const navbarHeight = document.querySelector('.navbar').offsetHeight; // Висота навбару
        const additionalOffset = 10 * window.innerHeight / 100; // 10vh

        let scrollToPosition;

        if (targetId === "#principio") {
            // Для логотипу, скрол до самого початку сторінки
            scrollToPosition = 0;
        } else {
            // Для інших блоків, враховуємо позицію і додатковий offset
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            const screenHeight = window.innerHeight;
            const elementHeight = targetElement.offsetHeight;

            scrollToPosition = targetPosition - ((screenHeight - elementHeight) / 2) - navbarHeight - additionalOffset;
        }

        // Скрол до розрахованої позиції
        window.scrollTo({
            top: scrollToPosition,
            behavior: 'smooth'
        });
    });
});












document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(".hidden");

    const onScroll = () => {
        animatedElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            const threshold = window.innerHeight * 0.2; // 30% області перегляду

            // Додати клас, коли 30% елемента знаходиться у вікні перегляду
            if (rect.top <= window.innerHeight - threshold && rect.bottom >= threshold) {
                el.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // Викликати при завантаженні сторінки
});
