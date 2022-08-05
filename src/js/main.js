const benefits = document.querySelectorAll(".benefits__item");

benefits.forEach(item => {
    const text = item.querySelector(".benefits__info-text")
    const textHeight = text.offsetHeight;
    console.log(textHeight);
    text.style.display = 'none';
    text.style.height = 0;
    console.log(text.style.height)

    item.addEventListener("mouseenter", function () {
        setTimeout(function () {
            text.style.transform = 'translateY(0%)';
            text.style.height = textHeight + 'px';
        }, 0);
        text.style.display = '';
        console.log(text.style.height)

    });
    item.addEventListener("mouseleave", function () {
        text.style.transform = '';
        text.style.height = 0;
        setTimeout(function () {
            text.style.display = 'none';
        }, 300);

    });
});



