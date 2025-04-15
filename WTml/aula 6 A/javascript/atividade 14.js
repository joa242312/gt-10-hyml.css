//função receda um obejeto carro
// odjeto contem as propriedades:
// modelo ano, cor e km
// se o carro for maior que 2020 ou tiver menos que 100km
// efidir "carro novo"
//  Se não exibir carrro usado
const Carro ={
    modelo: "Civic",
    ano: 2021,
    cor: "preto",
    km: 800
}
 function virificarCarro(Carro){
    if(Carro.ano > 2000 || Carro.km < 100){
        console.log("Carro novo")
    }else{
        console.log("carro usado")
    }
 }
 virificarCarro(Carro)