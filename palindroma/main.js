
let test = document.getElementById('calcola');

test.addEventListener('click', palindroma);


function palindroma(){

    // dichiaro una variabile string inseribile dall'utente
    let parola = document.getElementById('test').value;

    // Applico metodo split() a parola per ottenere un array
    let arr_parola = parola.split('');
    console.log(arr_parola);

    // Applico metodo reverse() per invertire l'array
    arr_parola = arr_parola.reverse();
    console.log(arr_parola);

    // Applico il metodo join() in modo che crea una nuova stringa concatenando gli elementi dell'array
    let parola_invertita = arr_parola.join('');
    console.log(parola_invertita);

    // confronto se la parola iniziale è uguale a quella invertita
    if(parola == parola_invertita){
        alert('la parola è palindroma');
    } else{
        alert('La parola non è palindroma');
    }

}
