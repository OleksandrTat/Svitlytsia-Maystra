document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("imageContainer");
  const imageCount = 72; // Кількість зображень для відображення
  const folders = ["bed", "door", "chest_of_drawers", "kitchen", "muebles", "outdoor", "shafa"]; // Папки із зображеннями
  const maxImages = { // Максимальна кількість зображень у кожній папці
    bed: 73,
    chest_of_drawers: 25,
    door: 155,
    kitchen: 45,
    muebles: 17,
    outdoor: 9,
    shafa: 91
  };

  // Додаємо зображення в контейнер
  for (let i = 0; i < imageCount; i++) {
    const imgDiv = document.createElement("div");
    imgDiv.classList.add("child-container"); // Ваш клас контейнера

    const img = document.createElement("img");

    // Випадкова папка
    const randomFolder = folders[Math.floor(Math.random() * folders.length)];
    // Випадковий номер зображення в межах maxImages
    const randomImageNumber = Math.floor(Math.random() * maxImages[randomFolder]) + 1;

    // Формування шляху до зображення
    img.src = `/img/katalog/${randomFolder}/${randomImageNumber}.jpeg`;
 // Локальний шлях до зображення
    img.alt = `Random Image ${i + 1}`;
    img.loading = "lazy"; // Ліниве завантаження

    imgDiv.appendChild(img);
    container.appendChild(imgDiv);
  }
});







// Щоб швидкіше грузило
  window.addEventListener('load', () => {
    const lazyBlock = document.getElementById('lazy-block');
    lazyBlock.style.display = 'block';
  });
  



  
// waterfall
  const observer = new IntersectionObserver(f, {
    threshold:[0,1]
  });
  
  function f(entries) {
    for (const entry of entries) {
      if (entry.isIntersecting && entry.intersectionRatio >= 1) {
        entry.target.classList.toggle("inbound", true)
      }
      else {
        entry.target.classList.toggle("inbound", false)
      }
    }
  }
  
  const itemEls = Array.from(document.querySelectorAll(".item"));
  for (const itemEl of itemEls)
    observer.observe(itemEl)



//Двері
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("imageContainer");
  const folder = "door"; // Назва папки, де зберігаються ваші зображення
  const numImages = 155; // Максимальна кількість зображень в папці

  // Додаємо зображення в контейнер
  for (let i = 1; i <= numImages; i++) {
    const imgDiv = document.createElement("div");
    imgDiv.classList.add("waterfall"); // Клас для контейнера

    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item"); // Клас для кожного елемента з зображенням

    const img = document.createElement("img");
    img.src = `/img/katalog/${folder}/${i}.jpeg`; // Формуємо шлях до зображення
    img.alt = `Image ${i}`;
    img.loading = "lazy"; // Ліниве завантаження зображення

    itemDiv.appendChild(img); // Додаємо зображення до елемента .item
    imgDiv.appendChild(itemDiv); // Додаємо елемент .item до контейнера .waterfall
    container.appendChild(imgDiv); // Додаємо .waterfall до головного контейнера
  }
});
