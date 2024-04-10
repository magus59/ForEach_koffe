let voiture = {
    marque: "renault",
    couleur: "bleu",
    nombreRoues: 4,
    electrique: true,
    nombreSieges: 5
};

let descriptionVoiture = `La voiture est une ${voiture.marque} de couleur ${voiture.couleur}. Elle a ${voiture.nombreRoues} roues et ${voiture.nombreSieges} sieges. Elle est ${voiture.electrique ? 'electrique' : 'non electrique'}.`;

console.log(descriptionVoiture);


// -------------------------------------------------------

let listeLegumes = ["Tomate", "", "Poivron", ""];

listeLegumes[1] = "Citrouille";

listeLegumes[3] = "Carotte";

console.log(listeLegumes);

// ------------------------------------------------------

function MultipleDe3(chiffre1, chiffre2) {

    let resultat = chiffre1 * chiffre2;

    if (resultat % 3 === 0) {
        return "C' est un multiple de 3";
    } else {
        return "Ce n est pas un multiple de 3";
    }
}