let day = new Date(); //variabile globale della data

const mesi = [ "gennaio","febbraio","marzo","aprile","maggio","giugno","agosto","settembre","ottobre","novembre","dicembre"]; //constante lista mesi

let n = day.getMonth(); // variabile mesi in valore numerico da 0 a 11


///////////////


document.getElementById("datadioggimese").innerHTML = `${day.getDate()} / ${mesi[n]} / ${day.getFullYear()}`; //data con mesi in stringa

//////////////

document.getElementById("date").innerHTML  += day; // funzione generale guardare funzione globale della data


//////////////

document.getElementById("day").innerHTML +=day.getDate(); // funzione giorno in numeri

//////////////

document.getElementById("month").innerHTML += mesi[n]; // funzione mesi in stringa


////////////////

document.getElementById("datadiogginumeromese").innerHTML = `${day.getDate()} / ${day.getMonth()+1} / ${day.getFullYear()}`; //data con mese in numeri


///////////////
let ora = `${day.getHours()}h : ${day.getMinutes()+1}m :${day.getSeconds()+1}s`; // variabile orario

// istruzione if combinata con orario e stringa if (regola) if{istruzioni} 
// se if è vero esegui if istruzione se if è falso else if
// se tutti gli else if sono falsi esegui else

if (day.getHours()>=5 && day.getHours()<=11){
    document.getElementById("orario").innerHTML += ora + "Buongiorno";
}
else if ( day.getHours() >= 12 && day.getHours() <=17){
    document.getElementById("orario").innerHTML += ora + "Buon pomeriggio";
}

else if ( day.getHours() >= 18 && day.getHours() <=22){
    document.getElementById("orario").innerHTML += ora + "Buonasera";
}

else if ( day.getHours() >= 23 && day.getHours() <=2){
    document.getElementById("orario").innerHTML += ora + "Buonanotte";
}

else {
    document.getElementById("orario").innerHTML += ora + "Torna a dormire";
}


/////////////////

//carica i secondi in automatico

setInterval(mytimer, 1000);
function mytimer(){
    const date = new Date ();
    document.getElementById("miaora").innerHTML=date.toLocaleTimeString();
}