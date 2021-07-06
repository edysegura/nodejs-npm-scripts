import zipFolder from 'zip-folder'
import { mkdir, rm } from 'fs/promises'
import { promisify } from 'util'

const sourceFolder = 'dist/'
const buildFolder = 'build/'
const warFile = 'webapp.war'
const zip = promisify(zipFolder)

await rm(buildFolder, { recursive: true, force: true })
await mkdir(buildFolder)
await zip(sourceFolder, buildFolder + warFile)

console.log('WAR file successfully zipped!')