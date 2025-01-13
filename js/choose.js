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
    img.src = `img/katalog/${randomFolder}/${randomImageNumber}.jpeg`;
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
  



  

  