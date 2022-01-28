// far scegliere se pari o dispari all'utente
let scelta_pari_dispari = prompt('Pari o Dispari?');
console.log('Hai scelto ' +scelta_pari_dispari);

// far scegliere un numero da 1 a 5 all'utente
let scelta_numero = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log('Hai scelto il numero ' + scelta_numero);

// genero un numero random da 1 a 5 per il computer
let numero_bot = randomNumber_1_5();
console.log('Numero casuale bot ' + numero_bot);

// sommo numero utente e numero computer
somma(scelta_numero, numero_bot);
console.log('Somma due numeri ' + somma(scelta_numero, numero_bot));

// se la somma è = a quella indicata dall'utente vince utente, altrimenti vince il computer
pariDispari();
alert('Ha vinto ' + pariDispari(somma));


// inizializzo una funzione per generare un numero casuale compreso tra 1 e 5
function randomNumber_1_5(){
    return Math.floor(Math.random() * (1,5 + 1) +1 );
}


// inizializzo una funzione perstabilire la somma dei due numeri utente e computer
 function somma (valore1, valore2){
    let calcolo = valore1 + valore2;
    return calcolo;
}


// inizializzo una funziona che calcoli se il numero è pari o dispari
function pariDispari(n){
    let ritorno;

    if(n % 2 == 0){
        ritorno = 'pari';
    } else{
        ritorno = 'dispari';
    }

    return ritorno;
}