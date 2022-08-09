const benefits = document.querySelectorAll(".benefits__item");

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



