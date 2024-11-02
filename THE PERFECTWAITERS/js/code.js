/****** Menu Burger pour le mobile ********/
const humberger = document.getElementById("humberger");
const nav = document.getElementById("nav");
humberger.addEventListener("click", () => {
    humberger.classList.toggle("active");
    nav.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    humberger.classList.remove('active');
    nav.classList.remove('active');
})
);

/****** Menu Scroll Desktop ********/

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');

  

    // Vérifier la position de défilement
    if (window.scrollY > 50) { // Ajuster la valeur selon tes besoins
        navbar.classList.add('navbar-scrolled');
        navbar.querySelector('.navbar-menu').classList.add('navbar-menu-scrolled');
        nav.classList.add('nav-scrolled');
        
        const navbar_brand = navbar.querySelector('.navbar-brand');
        const logo_image = navbar_brand.querySelector('img');
        logo_image.classList.add('navbar-brand-img');

    } else {
        navbar.classList.remove('navbar-scrolled');
        navbar.querySelector('.navbar-menu').classList.remove('navbar-menu-scrolled');
        nav.classList.remove('nav-scrolled');
            
        const navbar_brand = navbar.querySelector('.navbar-brand');
        const logo_image = navbar_brand.querySelector('img');
        logo_image.classList.remove('navbar-brand-img');
    }
});


// Sélectionner le bouton et le div
const toggleBtn = document.getElementById('btn-add-review'); // Remplace par l'ID de ton bouton existant
const toggleDiv = document.getElementById('add-review'); // Remplace par l'ID du div à afficher/masquer

// Ajouter un gestionnaire d'événement pour le clic
toggleBtn.addEventListener('click', function() {
    // Basculer la classe 'active-form-message' pour afficher/masquer le div
    toggleDiv.classList.toggle('add-review-active');
    toggleBtn.classList.toggle('')
});

/****** Social media fixed ********/

window.addEventListener('scroll', () => {
    const header_body = document.getElementById('header-body');

    const social_media_header = header_body.querySelector('.social-media-header');

    // Vérifier la position de défilement
    if (window.scrollY > 50 ) { // Ajuster la valeur selon tes besoins

        
        social_media_header.classList.add('social-media-header-fixed');

    } else {
        social_media_header.classList.remove('social-media-header-fixed');
    }
});



