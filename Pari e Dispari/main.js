// far scegliere se pari o dispari all'utente
let scelta_pari_dispari = prompt('Pari o Dispari?');

if(scelta_pari_dispari != "pari".toLowerCase || scelta_pari_dispari != "dispari".toLowerCase){
    scelta_pari_dispari = prompt('Inserisci se si vuole giocare con pari o  dispari');
}

/* proposta while
let i = 0;
while(scelta_pari_dispari != "pari".toLowerCase || scelta_pari_dispari != "dispari".toLowerCase){
    scelta_pari_dispari = prompt('Inserisci se si vuole giocare con pari o  dispari');
    i++;
}


*/

console.log('Hai scelto ' + scelta_pari_dispari);


// far scegliere un numero da 1 a 5 all'utente
let scelta_numero = parseInt(prompt('Inserisci un numero da 1 a 5'));

let j = 0;
while(scelta_numero >=6 || scelta_numero <=0 || isNaN(scelta_numero)){
   scelta_numero= parseInt(prompt('Inserisci un numero valido da 1 a 5'));
    j++;
}
console.log('Hai scelto il numero ' + scelta_numero);


// genero un numero random da 1 a 5 per il computer
let numero_bot = randomNumber_1_5();
console.log('Numero casuale bot ' + numero_bot);


// sommo numero utente e numero computer
somma(scelta_numero, numero_bot);
console.log('Somma due numeri ' + somma(scelta_numero, numero_bot));


// se la somma è = a quella indicata dall'utente vince utente, altrimenti vince il computer
pariDispari();
console.log('Il risultato è ' + pariDispari(somma))
alert('Vince: ' + pariDispari(somma));


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