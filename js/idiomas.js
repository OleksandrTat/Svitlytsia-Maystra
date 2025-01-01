const translations = {
    ua: {
        about: "Про нас",
        catalog: "Каталог",
        whyUs: "Чому ми",
        history: "Історія",
        contacts: "Контакти",
        mainText: "Ми з гордістю продовжуємо справу своїх дідів-прадідів.",
        description: "Використовуючи сучасні технології обробки деревини. Покладаємось на свій власний досвід роботи та проектуємо нові вироби.",
        productText: "Велику частину продукції ми виготовляємо на замовлення – тому індивідуальний підхід є ключовим фактором вдалих взаємин із клієнтами. З огляду на побажання замовників, ми створюємо дійсно якісні, сучасні і практичні меблі.",
        aboutUsHeader: "Про нас",
        aboutUsText: "Ми розробляємо і реалізуємо унікальні проекти сучасних меблів, які мають широкий спектр застосування для дому та бізнесу.",
        aboutUsDetails: "Серйозний підхід, кваліфіковані майстри, автоматизоване виробництво, дозволяє виготовляти якісні, елітні меблі від економ до преміум класу. Корпусні меблі виготовляються тільки за індивідуальними ескізами, що робить її на 100% ексклюзивними.",
        aboutUsFooter: "За своє існування ми отримали багато позитивних рекомендацій від наших клієнтів і не збираємося зупинятися на досягнутому результаті. Продукція відповідає необхідним стандартам. Здійснюємо співпрацю з відомими виробниками високоякісних комплектуючих."
    },
    en: {
        about: "About Us",
        catalog: "Catalog",
        whyUs: "Why Us",
        history: "History",
        contacts: "Contacts",
        mainText: "We proudly continue the work of our ancestors.",
        description: "Using modern woodworking technologies. We rely on our own experience and design new products.",
        productText: "A large part of the products is made to order, so individual approach is a key factor in successful relationships with customers. Based on customer preferences, we create truly high-quality, modern, and practical furniture.",
        aboutUsHeader: "About Us",
        aboutUsText: "We develop and implement unique projects of modern furniture with a wide range of applications for homes and businesses.",
        aboutUsDetails: "A serious approach, qualified craftsmen, automated production allows us to manufacture high-quality elite furniture from economy to premium class. Case furniture is made only according to individual sketches, making it 100% exclusive.",
        aboutUsFooter: "During our existence, we have received many positive recommendations from our customers and do not intend to stop at the achieved result. Our products meet the required standards. We cooperate with well-known manufacturers of high-quality components."
    },
    es: {
        about: "Sobre nosotros",
        catalog: "Catálogo",
        whyUs: "Por qué nosotros",
        history: "Historia",
        contacts: "Contactos",
        mainText: "Continuamos con orgullo el trabajo de nuestros antepasados.",
        description: "Utilizando tecnologías modernas de carpintería. Confiamos en nuestra propia experiencia y diseñamos nuevos productos.",
        productText: "Una gran parte de los productos se fabrican por encargo, por lo que el enfoque individual es un factor clave para relaciones exitosas con los clientes. Según las preferencias de los clientes, creamos muebles verdaderamente de alta calidad, modernos y prácticos.",
        aboutUsHeader: "Sobre nosotros",
        aboutUsText: "Desarrollamos e implementamos proyectos únicos de muebles modernos con una amplia gama de aplicaciones para el hogar y los negocios.",
        aboutUsDetails: "Un enfoque serio, artesanos calificados y producción automatizada nos permite fabricar muebles de alta calidad de gama económica a gama premium. Los muebles de gabinete se fabrican solo según bocetos individuales, lo que los hace 100% exclusivos.",
        aboutUsFooter: "Durante nuestra existencia, hemos recibido muchas recomendaciones positivas de nuestros clientes y no tenemos la intención de detenernos en los resultados alcanzados. Nuestros productos cumplen con los estándares necesarios. Colaboramos con fabricantes de componentes de alta calidad."
    }
};

function getLanguageFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get("lang") || "ua"; // Default to Ukrainian if no language parameter is present
}

function updateText(lang) {
    const elements = {
        about: document.querySelector('.nav-link[href="#about-us"]'),
        catalog: document.querySelector('.nav-link[href="#catalog"]'),
        whyUs: document.querySelector('.nav-link[href="#why-us"]'),
        history: document.querySelector('.nav-link[href="#history"]'),
        contacts: document.querySelector('.nav-link[href="#contacts"]'),
        mainText: document.querySelector('.texto-principal'),
        description: document.querySelector('.texto-principalmas'),
        aboutUsHeader: document.querySelector('.AboutUsH2'),
        aboutUsText: document.querySelector('.AboutUsP')
    };

    const translation = translations[lang];
    for (const key in elements) {
        if (elements[key]) {
            elements[key].textContent = translation[key];
        }
    }

    // Set background for selected language in dropdown
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        item.style.backgroundColor = ''; // Reset the background for all items
        item.style.color = ''; // Reset the text color for all items
    });

    // Highlight the active language button
    dropdownItems.forEach(item => {
        if (item.textContent.trim().toLowerCase().startsWith(lang)) {
            item.style.backgroundColor = '#A58365';  // Set the active language's background color
            item.style.color = 'white';  // Set the text color to white for active language
        }
    });
}

function setLanguage(lang) {
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);  // Update the lang parameter in the URL
    window.history.pushState({ path: url.href }, '', url.href);  // Update the URL without reloading
    updateText(lang);
}

document.addEventListener("DOMContentLoaded", () => {
    const lang = getLanguageFromUrl();
    updateText(lang);

    // Update language menu links
    document.querySelectorAll('.dropdown-item').forEach((item) => {
        const newLang = item.textContent.trim().toLowerCase().substring(0, 2);
        item.href = `index.html?lang=${newLang}`;
    });
});
