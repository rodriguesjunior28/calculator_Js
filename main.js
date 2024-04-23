//const display = document.forms['calcForm'].elements['display'];
const display = document.getElementById('display');
const btn = document.getElementById('btnOne');

// Aqui deixa colocar várias vezes o número digitado
const exibirNaTela = (valor) => { display.value += valor; }
const limparValor = () => { display.value = ''; } 
const adcionarDecimal = () => { 
    if(!display.value.includes('.')) {
        display.value += '.';
    }
}
// Aqui é pra o sinal de =
const realizarConta = () => {
    const resultado = eval(display.value);
    display.value = resultado;
}