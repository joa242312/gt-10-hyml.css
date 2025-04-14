// uma função que receba os dias e os kins rodos
// o valor por dia é 250
//valor por km rodado é 0.50
// Se tiver rodados mais de 1000km, o valor por km fica 0.25
function calcularAluguel(Dias, Kms){
    const valorPorDia = 250
    if(Kms > 1000){
        const valorDoKm = 0.25;
        const calculo = Dias * valorPorDia 
        const valorTotalKm = Kms * valorDoKm
        const Total = calculo + valorTotalKm
        console.log(Total)
    } else{ 
        const valorDoKm = 0.50;
        const calculo = Dias * valorPorDia
        const valorTotalKm = Kms * valorDoKm
        const Total = calculo + valorTotalKm
        console.log(Total)
    }
    }
    calcularAluguel(10,1000)
    calcularAluguel(1,1001)
    

