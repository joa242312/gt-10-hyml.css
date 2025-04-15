// crie uma função  que pegue a idade, genero e cidade um usurio
//Se o usuraio for do sexo maculino e tiver mais de 18 anos
//Exidir precisar se alistar
//Se o usuraio for do sexo maculino e tiver menos de 18 anos
// Exidar não precisar se alistar
const user = {
    Nome: "Samuel",
    idade: 24,
    genero:"Masculino",
    cidade:"Fortalezar"
}

function verificarAlistamento(user){
    if(user.idade >= 18 && user.genero == "Masculino"){
        console.log("Preciar se alistar") 
    } else{
        console.log("Não Preciar se alistar")
    }
}
 verificarAlistamento(user)