// Отримуємо посилання на елементи DOM
const menuBurgerBlock = document.querySelector('.menu-burger-block');
const menuBurger = document.querySelector('.menu-burger');
const menuHeader = document.querySelector('.header-menu');


// Додаємо обробник події при кліку на menuBurger
menuBurger.addEventListener('click', () => {
    // Додаємо або видаляємо клас "active" для menuBurgerBlock та menuBurger
    menuBurgerBlock.classList.toggle('active');
    menuBurger.classList.toggle('active');
    menuHeader.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function () {
    const mySwiper = new Swiper('.slider-container', {
        slidesPerView: 1, // Кількість видимих слайдів одночасно
        spaceBetween: 20, // Відстань між слайдами
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next', // Селектор кнопки "Наступний слайд"
            prevEl: '.swiper-button-prev', // Селектор кнопки "Попередній слайд"
        },
        autoplay: {
            delay: 4000, // Затримка між автоматичною зміною слайдів в мілісекундах (4 секунди)
            disableOnInteraction: false, // Вимкнути автопрокрутку при взаємодії користувача
        },
        effect: 'fade', // Ефект переходу між слайдами
        fadeEffect: {
            crossFade: true, // Зміна зображення через згасання (fade)
        }
    });
});
