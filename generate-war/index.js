import zipFolder from 'zip-folder'
import { mkdir, rm } from 'fs/promises'

const sourceFolder = 'dist/'
const buildFolder = 'build/'
const warFile = 'webapp.war'

await rm(buildFolder, { recursive: true, force: true })
await mkdir(buildFolder)

zipFolder(sourceFolder, buildFolder + warFile, () => {
  console.log('WAR file successfully generated!')
})
