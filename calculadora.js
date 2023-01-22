var n1 = '0'
var n2 = ''
var operador = null
function incluirDigito(digito){
    if (n2 && operador && clicadoEmIgual){
        clicadoEmIgual = false
        limpar()
        n1 = digito
        escreve(n1)   
        return
    }
    if (operador !== null){
        n2 += digito
        escreve(n2)
    } else {
        if (n1==='0'){
            n1 = digito
        } else {
            n1 += digito
        }
        escreve(n1)
    }  
    console.log (n1,operador,n2)  
    }

    
function escreve(valor){
    document.querySelector("#screen").innerHTML = valor    
}

function iniciarCalculo(simbolo){
     if (clicadoEmIgual){
        clicadoEmIgual = false
        n2 = ''
     }
     if (operador === null || n2 === ''){
        operador = simbolo;
     }else {
        var resultado = calcular()
        n1 = resultado
        operador = simbolo
        n2 = ''
        escreve(n1)
     }
   
    }

function calcular(){
    var _n1 = parseFloat(n1)
    var _n2 = parseFloat(n2)
    var nCalculado = 0

    switch(operador){
        case '+':
            nCalculado = _n1+_n2;
            break
        case '-':
            nCalculado = _n1-_n2;
            break
        case '*':
            nCalculado = _n1*_n2;
        break
        case '/': 
            nCalculado = _n1/_n2;
    }
    return nCalculado
}
   var clicadoEmIgual = false;
    function finalizarCalculo(){
        clicadoEmIgual = true
       var resultado = calcular()
       n1 = resultado
       document.querySelector('#screen').innerHTML = resultado
    }

    function limpar(){
        n1 = 0
        operador = null
        n2 = ''
        escreve(n1)
    }

    function incluirPonto(){
        if(operador && n2 === ''){
            n2 += '0.';
        } else if (operador  && n2){
            n2 += '.';
        } else {
            n1 += '.'
        }
    }

    function obterPorcento(){
        if(!n2){
            limpar()
            escreve(n1)
        } else {
            var porCento = n1 * n2 / 100
            n2 = porCento
            escreve(n2)
        }
        
    }

