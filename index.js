window.addEventListener('scroll', function() {
    var header = document.querySelector('.cabezera');
    var logo = document.getElementById('logo');
    if (window.scrollY > 0) {
        header.classList.add('scrolled'); // Añade la clase cuando se hace scroll
        logo.src = "img/logoScrolled2.png";
    } else {
        header.classList.remove('scrolled'); // Elimina la clase cuando vuelves a la parte superior
        logo.src = "img/logo.png"
    }
});

