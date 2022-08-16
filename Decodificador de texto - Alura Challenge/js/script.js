var entradaTexto = document.getElementById("entrada");
var saidaTexto = document.getElementById("saida");
var copiarTexto = document.getElementById("copiararea");

var botaoCriptografar = document.getElementById("botaoCripto");
var botaoDescriptografar = document.getElementById("botaoDescripto"); 
var botaoCopiar = document.getElementById("botaoCopia");

 botaoCriptografar.onclick = criptografar;
 botaoDescriptografar.onclick = descriptografar;
 botaoCopiar.onclick = copiar;


function criptografar(){
    var textoCriptografar = entradaTexto.value;

    var resultado = textoCriptografar.replaceAll("e", "enter");
    resultado = resultado.replaceAll("i", "imes");
    resultado = resultado.replaceAll("a", "ai");
    resultado = resultado.replaceAll("o", "ober");
    resultado = resultado.replaceAll("u", "ufat");

    copiararea.value = resultado;
}


function descriptografar(){
var textoDescriptografar = saidaTexto.value;

var resultado = textoDescriptografar;
    resultado = resultado.replaceAll("enter", "e");
    resultado = resultado.replaceAll("imes", "i");
    resultado = resultado.replaceAll("ai", "a");
    resultado = resultado.replaceAll("ober", "o");
    resultado = resultado.replaceAll("ufat", "u");

    copiararea.value = resultado;
}

function copiar(){
    resultado = document.getElementById("copiararea")
    resultado.select();
    document.execCommand("cut");
    alert('Texto copiado para área de transferência ' );
    
}
 
