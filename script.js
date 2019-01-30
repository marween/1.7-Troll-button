
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

let nbr = 0;

// clientWidth largeur css + espaces intérieurs - largeur de la barre de défilement vertical.
//eut être calculée comme la propriété CSS height + la propriété CSS padding - la hauteur de la barre de défilement horizontale (si présente).
let trollWidth = document.querySelector("#troll").clientWidth;
let trollHeight = document.querySelector("#troll").clientHeight;

//on assigne une position aleatoire a notre bouton click Here
let position = ()=> {
	let btn = document.querySelector("#troll");
	
	btn.style.left = Math.floor((Math.random() * (trollWidth + 500)) ) + "px";
	btn.style.top = Math.floor((Math.random() * (trollHeight + 300)) ) + "px";
	
	if(nbr === 5){
		document.querySelector("#troll").innerHTML = "tu ne sais même pas cliquer "
	}
	if(nbr === 6){
		document.querySelector("#troll").innerHTML = "imbécile "
	}
	if(nbr === 7){
		document.querySelector("#troll").innerHTML = " ahahah "
	}	
	if(nbr === 8){
		document.querySelector("#troll").innerHTML = " Click Here "
		nbr = 0

	}	
	nbr ++;
	
}

document.querySelector("#troll").addEventListener("mouseover", () => {
	position();
});

console.log("Hey look in your browser console. It works!");
