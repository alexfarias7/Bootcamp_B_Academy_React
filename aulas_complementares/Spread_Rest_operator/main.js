const person ={
    name:'alex',
    age:25,
    pais:'brasil',
    genere:'male'
}


const personUpdate={
    ...person,
    name:'rafael',
    cidade:'manaus'

}

person.idioma= 'portuguese'
console.log(person)
console.log(personUpdate)


//* spread de array
const arr =[1,2,3,4,5]
const arr2=[...arr,6]
console.log(arr2 )

//* spread de string

const str ='alex'
const arr3= [...str]
console.log(arr3)



//* utilização do destruction assgment
const {age,name , ...newPerson}=person

console.log(age)
console.log(newPerson)

function sum(a, 9...args) {
    return args
}

console.log(sum(1,2,3,4))