"use strict";
let valors;
//Cream una llista d'elements
let llistaTamagochis = [];
// 2. Funció per llegir el formulari i afegir un nou element a l'array
function afegirElement() {
    const inputNom = document.getElementById('iNom');
    const selectCategoria = document.getElementById('iAparença');
    const inputEdat = document.getElementById('iEdat');
    const checkEstat = document.getElementById('iCondicions');
    const inputPes = document.getElementById('iPes');
    valors = {
        nom: inputNom.value,
        pes: parseFloat(inputPes.value) || 0,
        aparença: selectCategoria.value,
        edat: parseFloat(inputEdat.value) || 0,
        condicions: checkEstat.checked,
        energia: 100,
        fam: 0,
        felicitat: 100,
    };
    llistaTamagochis.push(valors);
    console.table(llistaTamagochis);
    // Actualitzar la pantalla
    actualitzarUI();
}
function guardarCanvis() {
    const selectTema = document.getElementById('iTema');
    console.log(selectTema);
    actualitzarUI();
}
// 5. Funció per dibuixar l'array al DOM
function actualitzarUI() {
    const contenidor = document.getElementById('contenidorAnimals');
    contenidor.innerHTML = '<h1>Llista Animals </h1>';
    let html = '';
    for (let i = 0; i < llistaTamagochis.length; i++) {
        if (llistaTamagochis[i].nom === '') {
            avisarNom();
        }
        else {
            llevarAvis();
            if (llistaTamagochis[i].condicions === true) {
                html += '<div class=\'t1\'>';
                html += '<nom>' + llistaTamagochis[i].nom + '</nom>';
                html += '<div class=\"info\">';
                html += '<div>';
                html += '<h3> Edad: ' + llistaTamagochis[i].edat + '</h3>';
                html += '<h3> Peso: ' + llistaTamagochis[i].pes.toFixed(0) + ' kg </h3>';
                html += '<h3> Energia: ' + llistaTamagochis[i].energia.toFixed(0) + '</h3>';
                html += '<h3> Hambre: ' + llistaTamagochis[i].fam.toFixed(0) + '</h3>';
                html += '<h3> Felicitat: ' + llistaTamagochis[i].felicitat.toFixed(0) + '</h3>';
                html += '<\/div>';
                html += '<div>';
                if (llistaTamagochis[i].aparença === 'Opció 1') {
                    html += `<img id="estatImg" src="img/1.png" width="200px" height="200px" alt="Apariencia">`;
                }
                else if (llistaTamagochis[i].aparença === 'Opció 2') {
                    html += `<img id="estatImg2" src="img/2.png" alt="Apariencia">`;
                }
                else {
                    html += `<img id="estatImg3" src="img/3.png" alt="Apariencia">`;
                }
                html += '<\/div>';
                html += '<\/div>';
                html += '<div class=\'botons\'>';
                html += '<button style="margin: 5px" id="Dormir' + i + '" onclick="dormir(' + i + ')" >Dormir</button>';
                html += '<button style="margin: 5px" id="Comer' + i + '" onclick="menjar(' + i + ')" >Comer</button>';
                html += '<button style="margin: 5px" id="Jugar' + i + '" onclick="jugar(' + i + ')" >Jugar</button>';
                html += '<\/div>';
                html += '<\/div>';
            }
            else {
                html += '<div class=\'t1\'>';
                html += '<nom>' + llistaTamagochis[i].nom + ' (ilegal)</nom>';
                html += '<div class=\"info\">';
                html += '<div>';
                html += '<h3> Edad: ' + llistaTamagochis[i].edat + '</h3>';
                html += '<h3> Peso: ' + llistaTamagochis[i].pes.toFixed(0) + ' kg </h3>';
                html += '<h3> Energia: ' + llistaTamagochis[i].energia.toFixed(0) + '</h3>';
                html += '<h3> Hambre: ' + llistaTamagochis[i].fam.toFixed(0) + '</h3>';
                html += '<h3> Felicitat: ' + llistaTamagochis[i].felicitat.toFixed(0) + '</h3>';
                html += '<\/div>';
                html += '<div>';
                if (llistaTamagochis[i].aparença === 'Hachi') {
                    html += `<img id="estatImg" src="img/1.png" width="200px" height="200px" alt="Apariencia">`;
                }
                else if (llistaTamagochis[i].aparença === 'Nagi') {
                    html += `<img id="estatImg2" src="img/2.png" width="200px" height="200px" alt="Apariencia">`;
                }
                else {
                    html += `<img id="estatImg3" src="img/3.png" width="250px" height="200px"  alt="Apariencia">`;
                }
                html += '<\/div>';
                html += '<\/div>';
                html += '<div class=\'botons\'>';
                html += '<button style="margin: 5px" id="Dormir' + i + '" onclick="dormir(' + i + ')" >Dormir</button>';
                html += '<button style="margin: 5px" id="Comer' + i + '" onclick="menjar(' + i + ')" >Comer</button>';
                html += '<button style="margin: 5px" id="Jugar' + i + '" onclick="jugar(' + i + ')" >Jugar</button>';
                html += '<\/div>';
                html += '<\/div>';
            }
        }
    }
    contenidor.innerHTML = html;
}
// 6. Assegurar que el DOM està carregat abans d'assignar esdeveniments
document.addEventListener('DOMContentLoaded', () => {
    const btnAfegir = document.getElementById('btnAfegir');
    btnAfegir === null || btnAfegir === void 0 ? void 0 : btnAfegir.addEventListener('click', afegirElement);
    actualitzarUI();
});
document.addEventListener('DOMContentLoaded', () => {
    const btnGuardar = document.getElementById('btnGuardar');
    btnGuardar === null || btnGuardar === void 0 ? void 0 : btnGuardar.addEventListener('click', guardarCanvis);
    actualitzarUI();
});
function dormir(tamagochi) {
    if (llistaTamagochis[tamagochi].energia < 100) {
        llistaTamagochis[tamagochi].energia = llistaTamagochis[tamagochi].energia * 1.2;
    }
    if (llistaTamagochis[tamagochi].energia >= 100) {
        llistaTamagochis[tamagochi].energia = 100;
    }
    if (llistaTamagochis[tamagochi].felicitat === 0) {
        llistaTamagochis[tamagochi].felicitat = 0;
    }
    else {
        llistaTamagochis[tamagochi].felicitat = llistaTamagochis[tamagochi].felicitat * 0.8;
    }
    actualitzarUI();
}
function menjar(tamagochi) {
    if (llistaTamagochis[tamagochi].energia < 100) {
        llistaTamagochis[tamagochi].energia = llistaTamagochis[tamagochi].energia * 1.2;
    }
    if (llistaTamagochis[tamagochi].energia >= 100) {
        llistaTamagochis[tamagochi].energia = 100;
    }
    if (llistaTamagochis[tamagochi].fam === 0) {
        llistaTamagochis[tamagochi].fam = 0;
    }
    else {
        llistaTamagochis[tamagochi].fam = llistaTamagochis[tamagochi].fam * 0.8;
    }
    if (llistaTamagochis[tamagochi].pes === 0) {
        llistaTamagochis[tamagochi].pes = 1.3;
    }
    else if (llistaTamagochis[tamagochi].pes < 100) {
        llistaTamagochis[tamagochi].pes = llistaTamagochis[tamagochi].pes * 1.3;
    }
    if (llistaTamagochis[tamagochi].pes >= 100) {
        llistaTamagochis[tamagochi].pes = 100;
    }
    actualitzarUI();
}
function jugar(tamagochi) {
    if (llistaTamagochis[tamagochi].energia <= 0) {
        llistaTamagochis[tamagochi].energia = 0;
    }
    if (llistaTamagochis[tamagochi].energia > 0) {
        llistaTamagochis[tamagochi].energia = llistaTamagochis[tamagochi].energia * 0.6;
    }
    if (llistaTamagochis[tamagochi].fam === 0) {
        llistaTamagochis[tamagochi].fam = 10;
    }
    if (llistaTamagochis[tamagochi].fam < 100) {
        llistaTamagochis[tamagochi].fam = llistaTamagochis[tamagochi].fam * 1.2;
    }
    if (llistaTamagochis[tamagochi].fam >= 100) {
        llistaTamagochis[tamagochi].fam = 100;
    }
    if (llistaTamagochis[tamagochi].felicitat < 100) {
        llistaTamagochis[tamagochi].felicitat = llistaTamagochis[tamagochi].felicitat * 1.2;
    }
    if (llistaTamagochis[tamagochi].felicitat >= 100) {
        llistaTamagochis[tamagochi].felicitat = 100;
    }
    if (llistaTamagochis[tamagochi].pes <= 0) {
        llistaTamagochis[tamagochi].pes = 0;
    }
    if (llistaTamagochis[tamagochi].pes > 0) {
        llistaTamagochis[tamagochi].pes = llistaTamagochis[tamagochi].pes * 0.8;
    }
    actualitzarUI();
}
function ordenarNom() {
    llistaTamagochis.sort((a, b) => a.nom.localeCompare(b.nom));
    actualitzarUI();
}
function ordenarEdatMajMen() {
    llistaTamagochis.sort((a, b) => b.edat - a.edat);
    actualitzarUI();
}
function ordenarEdatMenMaj() {
    llistaTamagochis.sort((a, b) => a.edat - b.edat);
    actualitzarUI();
}
function ordenarPesMenMaj() {
    llistaTamagochis.sort((a, b) => a.pes - b.pes);
    actualitzarUI();
}
function ordenarPesMajMen() {
    llistaTamagochis.sort((a, b) => b.pes - a.pes);
    actualitzarUI();
}
function ordenarFelicitatMajMen() {
    llistaTamagochis.sort((a, b) => b.felicitat - a.felicitat);
    actualitzarUI();
}
function ordenarFelicitatMenMaj() {
    llistaTamagochis.sort((a, b) => a.felicitat - b.felicitat);
    actualitzarUI();
}
function avisarNom() {
    console.log('no has puesto nada');
    const colorInt = document.getElementById('errorNom');
    colorInt.innerText = 'Escribe un nombre!';
}
function llevarAvis() {
    const colorInt = document.getElementById('errorNom');
    colorInt.innerText = '';
}
function canviTema() {
    const cos = document.getElementById('bodyID');
    if (cos)
        cos.classList.toggle('vermell');
    // cos.classList.add('vermell');
}
