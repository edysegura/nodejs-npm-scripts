const ervy = require('ervy')
const { bar, bullet } = ervy

const data = [
  { key: 'A', value: 30, style: '+' },
  { key: 'B', value: 10, style: '*' },
  { key: 'C', value: 50, style: '#' }
]

console.log('-------------------')
console.log(bar(data))
console.log('-------------------')
console.log(bullet(data))
console.log('-------------------')
