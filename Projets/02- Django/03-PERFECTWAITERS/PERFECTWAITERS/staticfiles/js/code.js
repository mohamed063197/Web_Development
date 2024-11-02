
console.log("hello");
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


// ************* afichier plus de card ************ // 


function toggleShowMore() {
    // Récupère toutes les cartes qui ont la classe 'card-hidden'
    const hiddenCards = document.querySelectorAll('.card-hidden');
    const btn = document.getElementById('show-more-cards');

    if (btn.textContent === "PLUS D'AVIS") {
        hiddenCards.forEach(card => {
        card.style.display = "flex";
        
    });
        btn.textContent = "MONTRER MOINS D'AVIS";
    } else {
        hiddenCards.forEach(card => {      
        card.style.display = "none";
    });
        btn.textContent = "PLUS D'AVIS";
    }
}

    // Sélectionne toutes les étoiles
    const stars = document.querySelectorAll('.form-fa-star');

    // Ajoute un gestionnaire de clic à chaque étoile
    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            // Enlève la classe 'filled' de toutes les étoiles
            stars.forEach(s => s.classList.remove('fa-solid'));

            // Ajoute la classe 'filled' aux étoiles jusqu'à celle qui est cliquée
            for (let i = 0; i <= index; i++) {
                stars[i].classList.add('fa-solid');
                
            }
        });
    });







    // Sélectionner toutes les étoiles

    const evaluationInput = document.getElementById('evaluation');

    stars.forEach(star => {
        star.addEventListener('click', function() {
            // Récupérer la valeur de data-index de l'étoile cliquée
            const rating = this.getAttribute('data-index');

            // Mettre à jour le champ caché avec cette valeur
            evaluationInput.value = parseInt(rating) + 1;  // Convertir en entier et ajouter 1 car les indices commencent à 0
            
            console.log("Évaluation sélectionnée : " + evaluationInput.value);  // Pour voir la valeur dans la console

            // Mettre à jour l'apparence des étoiles pour refléter la sélection
            stars.forEach((s, i) => {
                if (i <= rating) {
                    s.classList.add('fa-solid');  // Remplir l'étoile (style plein)
                    s.classList.remove('fa-regular');  // Retirer le style vide
                } else {
                    s.classList.add('fa-regular');  // Remettre en style vide
                    s.classList.remove('fa-solid');  // Retirer le style plein
                }
            });
        });
    });