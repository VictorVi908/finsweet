const benefits = document.querySelectorAll(".benefits__item");
const menuButton = document.querySelector(".header__menu-btn");
const contactButton = document.querySelector(".header__btn");
const menu = document.querySelector(".menu");

benefits.forEach(item => {
    const text = item.querySelector(".benefits__info-text")
    const textHeight = text.offsetHeight;
    console.log(textHeight);
    text.style.display = 'none';
    text.style.height = 0;
    console.log(text.style.height)

    item.addEventListener("mouseenter", function () {
        text.style.display = '';
        setTimeout(function () {
            text.style.opacity = 0.78;
            text.style.height = textHeight + 'px';
        }, 0);

        console.log(text.style.height)

    });
    item.addEventListener("mouseleave", function () {
        text.style.height = 0;
        text.style.opacity = '';
        setTimeout(function () {
            text.style.display = 'none';
        }, 300);

    });
});



window.addEventListener("resize", function() {
    if (window.innerWidth > 860 && menu.classList.contains("menu--open") == true ) {
        menu.classList.remove("menu--open");
        menu.style.display = "";
    };
});

menuButton.addEventListener('click', function () {
    if (menu.classList.contains("menu--open") == false) {
        menu.style.display = "block";
        setTimeout(function () {
            menu.classList.add("menu--open");
        }, 10);
        
    } else {
        menu.classList.remove("menu--open");
        setTimeout(function () {
            menu.style.display = "";
        }, 200);
    }
});

