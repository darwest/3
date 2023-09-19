const menuBurgerBlock = document.querySelector('.menu-burger-block');
const menuBurger = document.querySelector('.menu-burger');
const menuHeader = document.querySelector('.header-menu');

menuBurger.addEventListener('click', () => {
    menuBurgerBlock.classList.toggle('active');
    menuBurger.classList.toggle('active');
    menuHeader.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function () {
    const mySwiper = new Swiper('.slider-container', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const nameInput = document.getElementById('name-input');
    const phoneInput = document.getElementById('phone-input');
    const emailInput = document.getElementById('email-input');
    const submitButton = document.getElementById('submit-button');
    const form = document.getElementById('feedback-form');
    const modal = document.getElementById('popup');

    function validateField(input, pattern, errorMessage) {
        const value = input.value.trim();
        if (value === "") {
            input.placeholder = "Поле обов'язкове для введення";
            input.classList.add('invalid');
            input.style.border = "2px solid rgba(228, 106, 106, 0.75)";
            return false;
        } else if (!pattern.test(value) || (input.id === 'name-input' && !isFirstLetterUpperCase(value))) {
            input.placeholder = errorMessage;
            input.value = "";
            input.classList.add('invalid');
            input.style.border = "2px solid rgba(228, 106, 106, 0.75)";
            return false;
        } else {
            input.textContent = "";
            input.style.boxShadow = "";
            input.classList.remove('invalid');
            input.style.border = "2px solid #ccc";
            return true;
        }
    }

    function isFirstLetterUpperCase(str) {
        return /^[A-ZА-ЯЁІЇЄҐ]/.test(str);
    }

    function handleSubmit(event) {
        event.preventDefault();

        const isNameValid = validateField(nameInput, /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s'-]+$/, "Неправильний формат введення даних");
        const isEmailValid = validateField(emailInput, /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, "Неправильний формат Email");
        const isPhoneValid = validateField(phoneInput, /^\d{12}$/, "Неправильний формат введення даних");

        if (isNameValid && isEmailValid && isPhoneValid) {
            form.submit();
            modal.style.display = 'none';
        }
    }

    submitButton.addEventListener('click', handleSubmit);

    nameInput.addEventListener('focus', function () {
        if (nameInput.classList.contains('invalid')) {
            nameInput.classList.remove('invalid');
            nameInput.style.border = "2px solid #ccc";
        }
    });

    emailInput.addEventListener('focus', function () {
        if (emailInput.classList.contains('invalid')) {
            emailInput.classList.remove('invalid');
            emailInput.style.border = "2px solid #ccc";
        }
    });

    phoneInput.addEventListener('focus', function () {
        if (phoneInput.classList.contains('invalid')) {
            phoneInput.classList.remove('invalid');
            phoneInput.style.border = "2px solid #ccc";
        }
    });
});
