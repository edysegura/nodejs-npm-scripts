const configVariables = [
  '----> host: ' + process.env.npm_package_config_host,
  '----> port: ' + process.env.npm_package_config_port,
  '----> name: ' + process.env.npm_package_name,
  '----> version: ' + process.env.npm_package_version
]

configVariables.forEach(output => console.log(output))
