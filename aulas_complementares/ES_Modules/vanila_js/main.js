//* import obj,{soma as somar, subtração ,div, multi} from './calculator.js'

import * as calculator from './calculator.js'
console.log('this:', this)


console.log(calculator.default)
console.log(calculator.soma(2,5))
console.log(calculator.subtração(2,5))
console.log(calculator.div(2,5))
console.log(calculator.multi(2,5))