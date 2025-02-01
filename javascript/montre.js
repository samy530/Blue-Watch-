const montres = [
    {
        nom : "DIESEL Dz7396 M",
        prix : 135.99,
        description: "57mm case diameter Résistant à l'eau à 30 m (100 pieds), mais ne convient pas pour la baignade ou la baignade ",
        image : "../images/diesel-dz7396-.jpg"
    },
    {
        nom : "FESTINA chrono",
        prix : 99.99,
        description: "Montre FESTINA Chrono. Boîtier et bracelet acier Cadran fond noir avec aiguilles bleues",
        image : "../images/montre-festina-chrono.jpg"
    },
    {
        nom : "Festina F20541/2",
        prix : 169.99,
        description: "Montre Homme Festina - F20541/2 - Chrono Sport plaqué or - Cadran bleu 45.05mm- -Etanche 100m- ",
        image : "../images/montre-homme-festina-f20541-2-chrono-sport-pla.jpg"
    },
    {
        nom : "DIESEL Montre DZ4344",
        prix : 122.00,
        description: "Montre DIESEL homme Boîtier rond (diam. 59 mm) en acier inoxydable doré, finition polie et brossée Etanche 10 ATM. ",
        image : "../images/diesel-montre-dz4344-homme.jpg"
    },
    {
        nom : "Festina Connected F20549/1",
        prix : 309.00,
        description: "Montre FESTINA homme forme du boitier rond matière du boitier acier inoxydable , Acier PVD or rose couleurs cadran Bleu. ",
        image : "../images/festina-homme-connected-f20549-1-hybrid-chrono.jpg"
    },
    {
        nom : "EMPORIO ARMANI Quartz AR2448",
        prix : 99.00,
        description: "Matière du bracelet Acier Inoxydable Couleur du bracelet Acier Boitier Acier Inoxydable forme du cadran Rond 10 bars. ",
        image : "../images/emporio-armani-montre-quartz-ar2448-homme.jpg"
    },
    {
        nom : "Montre Hugo Boss 1513755",
        prix : 220.99,
        description: "Acier inoxydable Argenté-Diamètre du boîtier: 43 mm-Épaisseur du boîtier: 13 mm- Couleur du boîtier: Argenté Couleur du cadran: Bleu ",
        image : "../images/hugo-boss-montre-chronographe-pour-homme-.jpg"
    },
    {
        nom : "EMPORIO ARMANI AR1737 ",
        prix : 99.99,
        description: "Montre Homme Emporio Armani Classic AR1737 Bracelet noir en cuir perforé - Montre Homme Emporio Armani Classic AR1737 Bracelet noir en cuir perforé",
        image : "../images/montre-homme-emporio-armani-classic-ar1737-brac.jpg"
    },
    {
        nom : "Tommy Hilfiger Multi Dial 1791476",
        prix : 104.00,
        description: "Diamètre du boîtier: 46 mm-Épaisseur du boîtier: 12 mm- Couleur du boîtier: Argenté  longueur du bracelet: 22 cm-largeur du bracelet: 20 mm-Fermoir: Boucle Ardillon-Résistant à l'eau: 5 bar-",
        image : "../images/tommy-hilfiger-montre-multi-dial-pour-homme-a-move.jpg"
    }
];


function generermontres(montres){
    for (let i = 0; i < montres.length; i++) {

        const article = montres[i];
        // Récupération de l'élément qui accueillera les cards
        const sectioncards = document.querySelector(".cards");
        // Création d’une balise dédiée à une montre
        const montreElement = document.createElement("article");
        // Création des balises 
        const imageElement = document.createElement("img");
        imageElement.src = article.image;
        const nomElement = document.createElement("h4");
        nomElement.innerText = article.nom;
        const prixElement = document.createElement("h6");
        prixElement.innerText = `Prix: ${article.prix} €`;
        const descElement = document.createElement("p");
        descElement.innerText = article.description ;
        const buttonElement = document.createElement("a");
        buttonElement.classList.add("cta-button");
        buttonElement.innerText = `Ajouter au panier`
        
        // On rattache la balise article a la section cards
        sectioncards.appendChild(montreElement);
        // On rattache l’image à montreElement (la balise article)
        montreElement.appendChild(imageElement);
        montreElement.appendChild(nomElement);
        montreElement.appendChild(prixElement);
        montreElement.appendChild(descElement);
        montreElement.appendChild(buttonElement);
        
     }
}

generermontres(montres);


// classe btn main
const btnmain = document.querySelector(".btn-main");
btnmain.addEventListener("click", function() {
    document.querySelector(".cards").innerHTML = "";
    generermontres(montres);
})


const btntrier = document.querySelector(".btn-trier");
btntrier.addEventListener("click", function () {
    const montresOrd = Array.from(montres);
    montresOrd.sort(function (a, b) {
        return a.prix - b.prix;
     });
     document.querySelector(".cards").innerHTML = "";
    generermontres(montresOrd);
});


const btnfiltrer = document.querySelector(".btn-filtrer");
btnfiltrer.addEventListener("click", function () {
    const montresFil = montres.filter(function (montre) {
        return montre.prix <= 100;
    });
    document.querySelector(".cards").innerHTML = "";
    generermontres(montresFil);
});


const btndec= document.querySelector(".btn-decroissant");
btndec.addEventListener("click", function () {
    const montresOrd = Array.from(montres);
    montresOrd.sort(function (a, b) {
        return b.prix - a.prix;
     });
     document.querySelector(".cards").innerHTML = "";
    generermontres(montresOrd);
});


