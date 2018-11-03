const ervy = require('ervy')
const { bar } = ervy

const data = [
  { key: 'A', value: 30 },
  { key: 'B', value: 10 },
  { key: 'C', value: 50 }
]

console.log(bar(data))
