const inquirer = require('inquirer')

const questions = [
  {
    type: 'input',
    name: 'language',
    message: "What's your favorite language?"
  },
  {
    type: 'input',
    name: 'framework',
    message: "What's your favorite framework?"
  }
]

inquirer.prompt(questions).then(answers => {
  console.log(`Language: ${answers['language']}!`)
  console.log(`Framework: ${answers['framework']}!`)
})