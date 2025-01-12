// При завантаженні документа
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("imageContainer");
    const imageCount = 72; // Кількість зображень для відображення
    const folders = ["animals", "nature", "architecture"]; // Папки із зображеннями
    const images = {
      animals: ["cat1.jpg", "dog1.jpg", "bird1.jpg"],
      nature: ["tree1.jpg", "lake1.jpg", "mountain1.jpg"],
      architecture: ["building1.jpg", "bridge1.jpg", "house1.jpg"],
    };

    // Додаємо зображення в контейнер
    for (let i = 0; i < imageCount; i++) {
      const imgDiv = document.createElement("div");
      imgDiv.classList.add("child-container"); // Ваш клас контейнера

      const img = document.createElement("img");

      // Випадкова папка та зображення
      const randomFolder =
        folders[Math.floor(Math.random() * folders.length)];
      const randomImage =
        images[randomFolder][
          Math.floor(Math.random() * images[randomFolder].length)
        ];

      img.src = `images/${randomFolder}/${randomImage}`; // Локальний шлях до зображення
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
  



  

  