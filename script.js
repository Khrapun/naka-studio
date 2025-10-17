// Бургер меню
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const navbar = document.querySelector(".navbar");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  burger.classList.toggle("active");
});

// Закрытие меню при клике на ссылку
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    burger.classList.remove("active");
  });
});

// Изменение навбара при прокрутке
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.style.padding = "10px 0";
    navbar.style.background = "rgba(10, 10, 10, 1)";
  } else {
    navbar.style.padding = "20px 0";
    navbar.style.background = "rgba(10, 10, 10, 0.95)";
  }
});

// Анимация при скролле
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Элементы для анимации
const animateOnScroll = document.querySelectorAll(
  ".service-card, .gallery-item, .feature, .contact-item"
);

animateOnScroll.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "all 0.6s ease";
  observer.observe(el);
});

// Обработка формы
const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Получаем данные формы
  const formData = new FormData(form);

  // Здесь можно добавить отправку на сервер
  // Пока просто показываем уведомление
  alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.");

  // Очищаем форму
  form.reset();
});

// Плавное появление hero секции
window.addEventListener("load", () => {
  document.querySelector(".hero-content").style.animation = "fadeInUp 1s ease";
});

// Параллакс эффект для hero секции
document.addEventListener("mousemove", (e) => {
  const hero = document.querySelector(".hero");
  if (hero && window.scrollY < window.innerHeight) {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    hero.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
  }
});

// Увеличение изображений в галерее (опционально)
const galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Здесь можно добавить модальное окно для просмотра фото в полном размере
    console.log("Gallery item clicked");
  });
});

