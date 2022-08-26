const benefits = document.querySelectorAll(".benefits__item");
const menuButton = document.querySelector(".header__menu-btn");
const contactButton = document.querySelector(".header__btn");
const menu = document.querySelector(".menu");
const html = document.querySelector("html");

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
        html.classList.remove("overflow-hidden");
        menu.style.display = "";
    };
});

menuButton.addEventListener('click', function () {
    if (menu.classList.contains("menu--open") == false) {
        html.classList.add("overflow-hidden");
        menu.style.display = "block";
        setTimeout(function () {
            menu.classList.add("menu--open");
        }, 10);
        
    } else {
        html.style.overflow = "";
        html.classList.remove("overflow-hidden");
        menu.classList.remove("menu--open");
        setTimeout(function () {
            menu.style.display = "";
        }, 200);
    }
});

