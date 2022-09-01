const benefits = document.querySelectorAll(".benefits__item");
const menuButton = document.querySelector(".header__menu-btn");
const contactButton = document.querySelector(".header__btn");
const menu = document.querySelector(".menu");
const html = document.querySelector("html");




if (window.innerWidth > 1024 && benefits.length > 0) {
    benefits.forEach(item => {
        const text = item.querySelector(".benefits__info-text")
        const textHeight = text.offsetHeight;
        let isHover = false;
        text.style.display = 'none';
        text.style.height = 0;

        item.addEventListener("mouseenter", function () {
            isHover = true;
            text.style.display = '';
            setTimeout(function () {
                text.style.opacity = 0.78;
                text.style.height = textHeight + 'px';
            }, 0);

        });
        item.addEventListener("mouseleave", function () {
            isHover = false;
            text.style.height = 0;
            text.style.opacity = '';
            setTimeout(function () {
                if (!isHover) {
                    text.style.display = 'none';
                }
            }, 500);

        });
    });
}



window.addEventListener("resize", function () {
    if (window.innerWidth > 860 && menu.classList.contains("menu--open") == true) {
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

