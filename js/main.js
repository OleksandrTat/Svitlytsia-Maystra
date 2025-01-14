document.addEventListener("DOMContentLoaded", () => {
    // Обробка всіх посилань з href="#"
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault(); // Запобігання стандартній поведінці

            const targetId = this.getAttribute("href"); // Отримання ID цільового елемента
            const targetElement = document.querySelector(targetId); // Знаходимо елемент за ID

            if (!targetElement && targetId !== "#principio") return; // Вихід, якщо елемент не знайдено

            const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0; // Висота навбару

            let scrollToPosition;

            if (targetId === "#principio") {
                // Якщо це посилання на початок сторінки
                scrollToPosition = 0;
            } else {
                const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY; // Позиція елемента
                const screenHeight = window.innerHeight; // Висота екрана
                const elementHeight = targetElement.offsetHeight; // Висота елемента

                // Центрування елемента
                scrollToPosition = elementPosition - (screenHeight / 2) + (elementHeight / 2) - navbarHeight;
            }

            // Плавна прокрутка
            window.scrollTo({
                top: scrollToPosition,
                behavior: "smooth"
            });
        });
    });
});













document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(".hidden");

    const onScroll = () => {
        animatedElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            const threshold = window.innerHeight * 0.4; // 30% області перегляду

            // Додати клас, коли 30% елемента знаходиться у вікні перегляду
            if (rect.top <= window.innerHeight - threshold && rect.bottom >= threshold) {
                el.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
});








document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Видаляємо клас active з усіх посилань
            navLinks.forEach(nav => nav.classList.remove("active"));
            
            // Додаємо клас active до натиснутого посилання
            this.classList.add("active");
        });
    });
});











// Сніг
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '*'; // Ви можете замінити на будь-який символ
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.fontSize = Math.random() * 20 + 10 + 'px';
    document.getElementById('snowflakes').appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

setInterval(createSnowflake, 500);



// Footer
$(document).ready(function () {
    $(".gallery-carousel").owlCarousel({
        loop: true, // Зацикленість
        margin: 0, // Відступи між елементами
        autoplay: true, // Автопрокрутка
        autoplayTimeout: 3000, // Період автопрокрутки
        autoplayHoverPause: true, // Пауза при наведенні
        nav: false, // Кнопки навігації
        dots: false, // Показувати чи ні точки навігації
        responsive: {
            0: {
                items: 4.5 // На мобільних по 1 елементу
            },
            600: {
                items: 6.5 // На планшетах по 3 елементи
            },
            1000: {
                items: 6.5 // На десктопах по 5 елементів
            }
        }
    });
});




//Прийняти Coockies
function acceptCookies() {
    const popup = document.getElementById("cookiesPopup");
    popup.classList.add("hidden");
    setTimeout(() => {
        popup.style.display = "none";
    }, 500);
}