window.addEventListener('scroll', function() {
    var header = document.querySelector('.cabezera');
    var sidebar = this.document.querySelector(".menu_sidebar");
    var logo = document.getElementById('logo');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
        sidebar.classList.add("scrolled"); // Añade la clase cuando se hace scroll
        logo.src = "img/logoScrolled2.png";
    } else {
        header.classList.remove('scrolled'); // Elimina la clase cuando vuelves a la parte superior
        sidebar.classList.remove("scrolled");
        logo.src = "img/Logo.png"
    }
});

document.getElementById('menuToggle').addEventListener('click', function(){
    const navegacion = document.getElementById("navegacion");
    navegacion.classList.toggle('show');
})

document.getElementById('menuToggle').addEventListener('click', function(){
    const sidebar = document.getElementById('sidebar');
    const menuHamburguesa = document.getElementById('menuToggle');

    sidebar.classList.toggle('active');
    menuHamburguesa.classList.toggle('active');

    if (sidebar.style.display === "none" || sidebar.style.display === "") {
        sidebar.style.display = 'block';
    } else {
        sidebar.style.display = 'none';
    }
})


