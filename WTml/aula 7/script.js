//amazernar valor dos imput alturar e peso
var alturar = document.getElementById("altura")
var peso = document.getElementById("peso")
//amazenar o valor do batão po id
var btn = document.getElementById("btn")
// amazenar o valor  div fim
var Fim = document.getElementById("Fim")
// função para clcular o IMC
function clacularIMC(){
  // amazenar apenas o valor do imput
  const valorAltura = alturar.value
  const valorPeso = peso.value
  // calcular o IMC
  const imc = valorPeso / (valorAltura * valorAltura)

  return imc
}
// função click
function calcular(){
    //chamar função de calcularIMC e amazenar o valor
    const imc = clacularIMC()
    var menssagem = ""
    if(imc < 18.5){
     menssagem = "você estar á Abaixo do normal"
    }if( imc > 18.5 &&  imc<=24.9){
    menssagem = "você estar peso Normal"
     }if( imc> 24.9 && imc <= 29,9){
     menssagem = "você estar com Sobrepeso"
     }if( imc > 29.9 && imc <=34.9){
    menssagem ="você estar com Obesidade grau I"
     }if( imc > 34.9 && imc <=39.9){
    menssagem ="você estar com Obesidade grau II"
     }if( imc > 400){
    menssagem ="você estar com Obesidade grau III"
     }
   // rederizar o resutado  na div fim
   Fim.innerHTML = `<div class="linha" /><div>
        <div class="resultado">
            <div class="esquerda">
             <p> Seu IMC </p>
                <h2>${imc.toFixed(2)}</h2>
                </div>
            <div class="direita">
            <P>${menssagem}<p.
        </div>
        <div class="linha" /><div>`
}
//adicionar evento de click no botão
btn.addEventListener("click", calcular)



