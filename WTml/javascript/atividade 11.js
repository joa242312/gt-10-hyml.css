function calcularAluguel(Dias){
    if(Dias > 15){
        const valorPorDia = 200
        const calculo = Dias * valorPorDia
        console.log(calculo)
    } else{ 
        const valorPorDia = 250
        const calculo = Dias * valorPorDia
        console.log(calculo)
    }
    }
    calcularAluguel(10)
    calcularAluguel(15)
    calcularAluguel(16)