const user = {
    nome: "João",
    altura: 1.80,
    peso: 82
}
//criar uma função que receba o objeto user
// e clacule o IMC
// IMC = peso /(altura * altura)
function clacularIMC(user){
    const iMC = user.peso/(user.altura * user.altura)
    console.log(iMC.toFixed(2))
    // if(iMC < 18.5){
    //     console.log("Abaixo do normal")
    // } else if(iMC > 18.5 &&  iMC<=24.9){
    //     console.log("Normal")
    // }else if(iMC > 24.9 && iMC <= 29,9){
    //     console.log("Sobrepeso")
    // }else if(iMC > 29.9 && iMC <=34.9){
    //     console.log("Obesidade grau I")
    // }else if(iMC > 34.9 && iMC <=39.9){
    //     console.log("Obesidade grau II")
    // }else if(iMC> 400){
    //     console.log("Obesidade grau III")
    // }
    //não mais utlizado mas a titulo de conhencimento
    if(iMC < 18.5){
       return console.log("Abaixo do normal")

    } if(iMC > 18.5 &&  iMC<=24.9){
        return console.log("Normal")
    } if(iMC > 24.9 && iMC <= 29,9){
        return console.log("Sobrepeso")
    } if(iMC > 29.9 && iMC <=34.9){
        return console.log("Obesidade grau I")
    } if(iMC > 34.9 && iMC <=39.9){
        return console.log("Obesidade grau II")
    }if(iMC> 400){
        return console.log("Obesidade grau III")
    }
}
clacularIMC(user)