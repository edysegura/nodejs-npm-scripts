const ervy = require('ervy')
const { bar } = ervy

const data = [
  { key: 'A', value: 30, style: '+' },
  { key: 'B', value: 10, style: '*' },
  { key: 'C', value: 50, style: '#' }
]

console.log(bar(data))
