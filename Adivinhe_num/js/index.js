const form = document.getElementById('form'); /* acesso pelo id */
form.addEventListener('submit', handleSubmit);/* quando ele for enviado eu quero que ele faça algo no caso chame a função*/

/* novas variaveis --> */
let status = document.getElementById('status'); 
let attempt = document.getElementById('attempt');
let result = document.getElementById('result');

const Adivinhe = {
    max:10,
    attemptsNumber:0,
    numberDrawn: function randomValue() { /* fução vai fazer o sistema pensar em um numero */
        return Math.round(Math.random() * this.max);/* math.round arredonda os numeros. 1.5/1.6 arredonda pra 2  */
    }
};

let numberDrawn = Adivinhe.numberDrawn();

function updateAttempt(attempt, value){
    attempt.innerHTML = 'Tentativa: ' + value
};


function handleSubmit(e){/* principal função do jogo */
    e.preventDefault(); /* não carrega a pagina ao enviar o formulario */

    let kick = document.getElementById('kick').value;

    if(!kick) {
        alert('Digite algum valor!')
        return;
    };

    updateAttempt(attempt, ++Adivinhe.attemptsNumber);

    if(numberDrawn == kick){
        playAgain();
        status.innerHTML = 'Parabens voce acertou!';
        result.style.transition = '0.4s';
        result.style.backgroundColor = '#37c978';
        result.style.color = '#fff';
        status.style.color = '#fff';
        clear();

    }else if(numberDrawn > kick){
        status.innerHTML = 'o numero é maior';
        status.style.color = '#de4251';
        clear();


    }else if(numberDrawn < kick){
        status.innerHTML = 'o numero é menor';
        status.style.color = '#de4251';
        clear();
    };
};

function playAgain( ){ /* função usada para qaundo o jogo terminar o botão de jogar de novo reaparecer */
    document.getElementById('btnRestart').style.display = 'flex'; /* por padrao esta no none */
};

function restart(){
    document.location.reload(true);/* atualizar a pagina irei jogar novamente */
};

function clear(){ /* limpar o campo de numero */
    document.getElementById('kick').value = '';
};