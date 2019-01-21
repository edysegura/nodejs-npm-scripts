'use strict'

const zipFolder = require('zip-folder')
const fs = require('fs')

const sourceFolder = 'dist/'
const buildFolder = 'build/'
const warFile = 'webapp.war'

fs.mkdir(buildFolder, () => {
  zipFolder(sourceFolder, buildFolder + warFile, error => {
    error
      ? console.log('[Error] ' + error)
      : console.log('WAR file successfully generated !')
  })
})
