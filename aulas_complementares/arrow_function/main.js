const sum = (a,b)=> a+b
console.log(sum(1,2))




//* não se pode usar em class ou prototype
const getOBject =(name)=>({ name:name})
//* sempre que retornar um objeto de forma imlicita tem que envolver o objeto com parenteses
console.log(getOBject('alex'))