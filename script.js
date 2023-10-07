"use strict"; //informe toutes les erreurs
//console.log() permet d'afficher ce que l'on veut dans la console de la page


//----Variables----

var prenom = "Margot";
console.log(prenom); //appel la variable dans la console de la page

let nom = "Delage";
console.log(nom);

console.log(typeof prenom);

let age = 17;
console.log(age);
console.log(typeof age); //type : number, pas de dif entre int et float

let ouvert = true;

console.log(prenom + " " + nom + " " + age + " ans"); //possibilité de remplacer les + par des ,

console.log(`Bonjour ${prenom} ${nom} vous avez ${age} ans`); //alt gr + è = ` | mettre les variables avec $, permet de faire des phrases avec des variables sans avoir a utiliser des + ou , parce que c'est très long

console.log(age * age); //additione, multipli, ect des nombre ( number ) entre eux, pour coquatenait des nombre on peut mettre des ,



let prof = "RV"
let cours ="js"
let date = "3 septembre"

prenom = "Fred";

console.log(`Aujourd'hui ${date} nous avons cours de ${cours} avec ${prof}, ${prenom} ${nom}`);
console.log(date +" cours de "+ cours +" avec "+ prof);



//----Fonctions----

function dit_bonjour() {
    console.log("Bonjour");
}

dit_bonjour();


function saluer(moi,toi) {
    console.log(`Boujour bienvenue ${moi}`);
    console.log("Boujour bienvenue" + toi);
}

saluer(prenom, " RV");



//----Conditions----

let nbr1 = 5;
let nbr2 = 8;
let nbr3 = "5";

if (nbr1 == nbr3) { //double égal egalité simple (prends en compte ce qu'il y a dans les " "), triple égal égalité stricte ici ça ne marcherait pas puisque nbr1 et nbr3 ne sont pas du même type donc pas une entière égalité
    console.log("Idem");
    //alert("Idem");
}


if (nbr1 === nbr3) {
    console.log("Idem bis");
    //alert("Idem bis");
}else{
    console.log("je suis dans le else");
    //alert("Je suis dans le else");
}

if (nbr1 > nbr2) {
    console.log("nbr1 est plus grand");
    //alert("nbr1 est plus grand");
} else if (nbr1 < nbr2) {
    console.log("nbr1 est plus petit");
    //alert("nbr1 est plus petit");
} else {
    console.log("je ne sais pas");
    //alert("je ne sais pas");
}



//----Switch----

switch (2) { //équivalent de if va comparer ce qui est en paramettre avec tous ce que l'on met en paramettre de case (fonctionne avec d'autre chose que des nombres), ! ATTENTION ! ne pas oublier le break
    case 1:
        console.log("je suis le chiffre 1");
        break;
    case 2:
        console.log("je suis le chiffre 2");
        break;
    case 3:
        console.log("je suis le chiffre 3");
        break;
    case 4:
        console.log("je suis le chiffre 4");
        break;
    case 7:
        console.log("je suis le chiffre 7");
        break;
    default:
       console.log("je suis un autre chiffre");
}



//----et &&----ou ||----

if (nbr1 == 5 && nbr2 == 8) {
    console.log("je suis trop fort");
    //alert("je suis trop fort");
} else {
    console.log("noob");
    //alert("noob");
}

if (nbr1 == 5 || nbr2 == 5) {
    console.log("je suis trop fort ou l'autre");
    //alert("je suis trop fort ou l'autre");
} else {
    console.log('noob');
    //alert('noob')
}



//----Tableau----

let tableau_fruit = ["peche", "pomme", "mangue", "ananas"]

if (tableau_fruit[2] == "mangue") {
    console.log("ok pour tableau, mangue");
}

console.log(tableau_fruit);
console.log(tableau_fruit.length); //longueur de la liste
console.log(tableau_fruit.push("fraise")); //ajoute à droite
console.log(tableau_fruit[4] = "poire");
console.log(tableau_fruit);



//----Boucle----

// ! ATTENTION ! ne pas tomber dans les boucles infini (peut mal finir pour le pc)
for (let i = 0; i < tableau_fruit.length; i++) { //équivalent de while ( ça peut être infini), équivalent de for | i++ -> i + 1 (i-- -> i - 1), pour aller de 2 en 2 ou autre on ecrit i += 2
    console.log(tableau_fruit [i]);
}



//----exercice----

for (let i = 10; i >= 0; i--) {
    if (i==0) {
        console.log("Bonne année");
    } else {
        console.log(i);
    }
}

