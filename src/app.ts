// 1. Model de dades (Interface)
interface Tamagochi {
    nom: string;
    aparença: string;
    edat: number;
    condicions: boolean;
    pes: number;
}

let valors: Tamagochi;

//Cream una llista d'elements
let llistaTamagochis: Tamagochi[] = [];
// 2. Funció per llegir el formulari i afegir un nou element a l'array
function afegirElement(): void {
    const inputNom = document.getElementById('iNom') as HTMLInputElement;
    const selectCategoria = document.getElementById('iAparença') as HTMLSelectElement;
    const inputEdat = document.getElementById('iEdat') as HTMLInputElement;
    const checkEstat = document.getElementById('iCondicions') as HTMLInputElement;
    const inputPes = document.getElementById('iPes') as HTMLInputElement;
    const inputImage = document.getElementById('iImage') as HTMLInputElement;

    valors = {
        nom: inputNom.value,
        pes: parseFloat(inputPes.value) || 0,
        aparença: selectCategoria.value,
        edat: parseFloat(inputEdat.value) || 0,
        condicions: checkEstat.checked,
    };

    llistaTamagochis.push(valors);
    console.log(llistaTamagochis);
    // console.log(valors);
    // Actualitzar la pantalla
    actualitzarUI();
}

function guardarCanvis(): void {
    const selectTema = document.getElementById('iTema') as HTMLInputElement;

    console.log(selectTema)
    actualitzarUI()
}

// 5. Funció per dibuixar l'array al DOM
function actualitzarUI(): void {
    // const nom = document.getElementById('nom') as HTMLElement;
    // const aparença = document.getElementById('aparença') as HTMLElement;
    // const edat = document.getElementById('edat') as HTMLElement;
    // const condicions = document.getElementById('condicions') as HTMLElement;
    // const pes = document.getElementById('pes') as HTMLElement;
    //
    // nom.innerText= valors.nom
    // aparença.innerText= valors.aparença;
    // edat.innerText= "Edat: " + String(valors.edat);
    // pes.innerText=String(valors.pes); // Com que és un número l'hem de passat a text
    // if (valors.condicions===true) {  //Exemple de com tractar un checkBox de vertader o fals
    //     condicions.innerText="Actiu"
    // }else{
    //     condicions.innerText="No disponible"
    // }

    const contenidor = document.getElementById('contenidorAnimals') as HTMLElement;
    contenidor.innerHTML ='<h1>Llista Animals </h1>';

    let html =''
    for (let i = 0; i < llistaTamagochis.length; i++) {
        html+='<div class=\'t1\'>'
        html+='<nom>'+llistaTamagochis[i].nom+'</nom>'
        html+='<h3>'+llistaTamagochis[i].aparença+'</h3>'
        html+='<h3>'+llistaTamagochis[i].edat+'</h3>'
        html+='<h3>'+llistaTamagochis[i].pes+'</h3>'
        html+='<\/div>'
    }
    contenidor.innerHTML= html;
}

// 6. Assegurar que el DOM està carregat abans d'assignar esdeveniments
document.addEventListener('DOMContentLoaded', () => {
    const btnAfegir = document.getElementById('btnAfegir');
    btnAfegir?.addEventListener('click', afegirElement);
    actualitzarUI();
});

document.addEventListener('DOMContentLoaded', () => {
    const btnGuardar = document.getElementById('btnGuardar');
    btnGuardar?.addEventListener('click', guardarCanvis);
    actualitzarUI();
});


function aniversari(){
    edat++
    
}