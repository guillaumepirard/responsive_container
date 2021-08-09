function symp(){
    document.getElementById("h").textContent = "SYMFONY";
    document.getElementById("p1").textContent = "Symfony, c’est LE framework en PHP. Un framework français (Oui môssieur) qui permet la réalisation de sites riches et performants. Les développeurs Symfony ont la cote chez les recruteurs et sont très demandés pour leur capacité à gérer des projets complexes.";
    document.getElementById("p2").textContent = "Pour ceux qui ont adoré se bagarrer avec PHP, on les invite grandement à embrasser la spécialisation back-end avec Symfony. Pendant un mois entier, on construit une application web avec Symfony 4, en couvrant les fonctionnalités essentielles du framework et des modules les plus utiles : routing, bundles, Doctrine, Twig…";
    document.getElementById("p3").textContent = "Un très grand nombre d’entreprises utilisent cette technologie, comme Spotify ou encore Blablacar. Pour la petite histoire, notre plateforme de cours est elle aussi développée avec Symfo’ !";
    document.getElementById("link").textContent = "Pour avoir des infos sur le programme ou vous former uniquement sur cette techno, allez jeter un oeil à la formation Symfony";


    
    document.getElementById("sympline").className = "sho";
    document.getElementById("sympp").className = "hide";
    document.getElementById("reactline").className = "hide";
    document.getElementById("reactp").className = "show";
    document.getElementById("wordline").className = "hide";
    document.getElementById("wordp").className = "show";
}
document.getElementById("symp").addEventListener("click", symp)

function react(){
    document.getElementById("h").textContent = "REACT";
    document.getElementById("p1").textContent = "React, c’est la bibliothèque JavaScript créée par Facebook. Vous savez, le p’tit site où plus de deux milliards d’utilisateurs se retrouvent. Autant dire que c’est plutôt robuste comme technologie.";
    document.getElementById("p2").textContent = "ReLes étudiants qui se sont découvert une âme de magicien avec JavaScript seront séduits par cette spécialisation front-end : un voyage à travers l’écosystème JS, la découverte de la nouvelle mouture du langage ES6 (ou ES2015+ pour les intimes), la création d’interfaces dynamiques avec React, et bien d’autres choses encore.act";
    document.getElementById("p3").textContent = "De plus en plus de start-ups se tournent vers React, pour profiter de sa flexibilité : Netflix, Airbnb, Dropbox, ou encore Uber. Pour la 2e petite histoire, la phrase que vous lisez à cet instant a été générée avec React !";
    document.getElementById("link").textContent = "Pour avoir des infos sur le programme ou vous former uniquement sur cette techno, allez jeter un oeil à la formation React.js";

    document.getElementById("sympline").className = "hide";
    document.getElementById("sympp").className = "show";
    document.getElementById("reactline").className = "show";
    document.getElementById("reactp").className = "hide";
    document.getElementById("wordline").className = "hide";
    document.getElementById("wordp").className = "show";
}
document.getElementById("react").addEventListener("click", react)

function word(){
    document.getElementById("h").textContent = "WORDPRESS";
    document.getElementById("p1").textContent = "WordPress, c’est un CMS comme on dit dans le jargon. Concrètement, c’est un outil qui permet de publier du contenu très facilement, avec une interface d’administration prête à l’emploi. C’est l’idéal pour la création de sites éditoriaux : blog, site d’infos, site vitrine…";
    document.getElementById("p2").textContent = "Avec WordPress, la structure du site est déjà en place, ce qui permet au développeur de se concentrer sur d’autres tâches : intégrer des maquettes graphiques, réaliser la version mobile, ou même toucher au webmarketing. Le développeur WordPress est un véritable couteau suisse ! Cette spécialisation s’adresse aux ambitieux touche-à-tout qui rêvent de pouvoir créer un site de A à Z.";
    document.getElementById("p3").textContent = "Petite stat’ sympa : 35% du web tourne sous WordPress. Autant dire que les devs WP n’ont pas le temps de s’ennuyer. Encore une fois, vous allez dire qu’on le fait exprès, mais O’clock utilise WordPress pour son blog !";
    document.getElementById("link").textContent = "Pour avoir des infos sur le programme ou vous former uniquement sur cette techno, allez jeter un oeil à la formation WordPress";

    document.getElementById("sympline").className = "hide";
    document.getElementById("sympp").className = "show";
    document.getElementById("reactline").className = "hide";
    document.getElementById("reactp").className = "show";
    document.getElementById("wordline").className = "show";
    document.getElementById("wordp").className = "hide";
}
document.getElementById("word").addEventListener("click", word)