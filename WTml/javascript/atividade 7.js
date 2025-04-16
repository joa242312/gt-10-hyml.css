// uma Lista de modelos de carros

const modelos=["hatchback","Sedan","SUV","Crossover"]

console.log(modelos)
//console.log(modelos[1])

//adicionar um modelo no final da Lista
modelos .push ("Picape")

//console.log(modelos)

//Contagem

 console.log(modelos .length)//5
 
 modelos .push("320i")

 //console.log(modelos)

//remover o ultimo modelo
modelos.pop()//320i
console.log(modelos.length)

//console.log(modelos)

//remover um especifico modelo especifico
modelos.splice(1,1)// remover o modelo na posiação 1
//console.log(modelos)

