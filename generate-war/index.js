const zipFolder = require('zip-folder');
const fs = require("fs");

const sourceFolder = 'dist/';
const buildFolder = 'build/';
const warFile = 'webapp.war';

fs.mkdir(buildFolder, function () {
  zipFolder(sourceFolder, buildFolder + warFile, function(err) {
    if(err) {
      console.error('Error', err);
    } else {
      console.info('WAR file successfully generated !');
    }
  });
});
