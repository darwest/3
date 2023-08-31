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
