const person ={
    name:'alex',
    age:25
}
//const name = person.nam
//const {name}= person

const {name, age} = person
console.log(age)

console.log(name)

const doors = 4
const color='red'

const car ={doors,color}

const {doors:dorsRename, color:colorREname}= car
console.log(car)
console.log(dorsRename, colorREname)

//*Destructuring DE ARRAYS
const coordenadas = ['coordernadas',100,200]

//const [x,y]= coordenadas
//onst [,y]=coordenadas
//console.log(y)
const [title, x,y] = coordenadas
console.log(title, x,y)

//* argumentos de função

function getCoords ([x,y]){
    return{x,y}

}


console.log(getCoords([100,200]))

function getCOnfig({config}){
    return config
}
console.log(getCOnfig({config:true}))
