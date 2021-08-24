import chalk from 'chalk'

const TARGET = process.env.npm_lifecycle_event

console.log(`🔀 Which script has been started? ${chalk.red(TARGET)}`)
