let block = document.querySelector('.block');

window.addEventListener('scroll', function () {
    if (pageYOffset >= 200) {
        block.classList.add('active');
    } else {
        block.classList.remove('active');
    }
})

document.querySelector(".block").addEventListener("click", () => {
    document.querySelector("html").style.scrollBehavior = "smooth";
    setTimeout(() => {
        document.querySelector("html").style.scrollBehavior = "unset";
    }, 5000);
});