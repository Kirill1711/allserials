//**кнопка вверх */
document.querySelector('.arrowtoTop').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
