
// Création des différents tableau de morceau de citation de type foot
var startQuoteFoot = ["Zinedine Zidane", "Thierry Henry", "Christiano Ronaldo", "Lionel Messi", "Neymar","Zlatan Ibrahimovic"];
var middleQuoteFoot = ["est le plus grand", "est le plus fort", "est le plus riche", "est le meilleur buteur", "est le plus beau", "est le plus technique"];
var endQuoteFoot = ["du monde !!!", "de la terre !!!", "de tout les temps!!!", "de sa gération!!!", "pour moi!!!", "pour les français !!!"];

// Création des différents tableau de morceau de citation de type film
var startQuoteFilm = ["J'étais prêt à tourner la page", "Je n'aime pas faire la morale", "Chaque personne qu'on s'autorise à aimer", "On passe à côté de l'âme soeur", "T'es une star","Quand on s'accroche trop au passé", "C'est la joie d'me revoir"];
var middleQuoteFilm = ["mais c'est la page", "mais je vais te donner un conseil", "est quelqu'un", " si on la rencontre", "pour les gens", "on se condamne", "ou tu caches un lapin"];
var endQuoteFilm = ["qui ne veut pas se tourner !!!", "qui te servira à jamais !!!", "qu'on prend le risque de perdre !!!", "trop tôt ou trop tard!!!", "qui t'aiment!!!", "à ne pas avoir d'avenir !!!","dans ton pantalon"];

var boutonElt = document.getElementById("bouton");
// Ajout d'un gestionnaire pour l'événement click
boutonElt.addEventListener("click", function () {
// Génération aléatoire d'un nombre compris entre 0 et taille d'un tableau -1
	function aleatoire(morceauCitation){
		return Math.floor(Math.random() * morceauCitation.length);
	};

	// Création de la fonction qui renvoie les citations foot
	function quoteFoot(){
	// Création des variables contenant chaque partie de la citation Foot.
			var part1 = startQuoteFoot[aleatoire(startQuoteFoot)];
			var part2 = middleQuoteFoot[aleatoire(middleQuoteFoot)];
			var part3 = endQuoteFoot[aleatoire(endQuoteFoot)];
	// affichage dans la console de la citation complete.
			return console.log(part1 + " " + part2 + " "+ part3);
	};

	// Création de la fonction qui renvoie les citations film
	function quoteFilm(){
	// Création des variables contenant chaque partie de la citation films.
			var part1 = startQuoteFilm[aleatoire(startQuoteFilm)];
			var part2 = middleQuoteFilm[aleatoire(middleQuoteFilm)];
			var part3 = endQuoteFilm[aleatoire(endQuoteFilm)];
	// affichage dans la console de la citation complete.
			return console.log(part1 + " " + part2 + " "+ part3);
	};


	// Génération de la citation complète selon le nombre de répétition et le type de citation.
	function quote (repeat){
		for (var i = 1; i <= repeat; i++) {
			if (type === 1) {
				quoteFoot()
			} else if (type === 2) {
				quoteFilm();
			} else {
				console.log("Au revoir");
				break;
			}
		};
	};


	// Affichage dans la console des differentes options
	
	console.log(" 1 : Générer 1 citations \n 2 : Générer 2 citations \n 3 : Générer 3 citations \n 4 : Générer 4 citations \n 5 : Générer 5 citations \n 0 : Quitter \n");


	while ((choice !==0) && (type !==0)) {
        // Choix du nombre de citation par l'utilisateur
		var choice = Number(prompt("Combien voulez-vous de citation ? "));
		
		if ((choice >= 0) && (choice <= 5)){
			if (choice !==0 ) {
				//choix du type de citation
				console.log(" 1 : Citation de foot \n 2 : Citation de film \n 0 : Quitter");
				var type = Number(prompt("Quel type de citation voulez vous? "));
				// Gestion des erreurs de saisi du type de citation.
				while ((type !== 1) && (type !== 2) && (type !== 0)) {
					type = Number(prompt("Je ne connais pas ce type de citation ;-(, veuillez entrer un type correct : "));
				}
				// Affichage des citations suivant la demande de l'utilisateur.
				switch (choice) {
					case 1 :
						quote(choice);
						break;
					case 2 :
						quote(choice);
						break;
					case 3 :
						quote(choice);
						break;
					case 4 :
						quote(choice);
						break;
					case 5 :
						quote(choice);
						break;
				
				}
			} else {
				console.log("Au revoir");
			}
		}
	}

});








