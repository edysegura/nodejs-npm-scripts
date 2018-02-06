const path = require('path')
const childProcess = require('child_process')
const fs = require('fs')

const configPath = path.join(__dirname, 'config.json')
const config = require(configPath)

const commitId = childProcess
  .execSync('git rev-parse HEAD')
  .toString()
  .trim()
  .substring(0, 7)

const build = config.build
const date = Date.now()

build.number = process.env.BUILD_NUMBER || '001'
build.date = date
build.commitId = commitId

fs.writeFileSync(configPath, JSON.stringify(config, null, 2), 'UTF-8')
console.info('[INFO] Build data updated')
