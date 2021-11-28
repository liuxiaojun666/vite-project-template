const { engines } = require('../package')

const version = engines.node
if (process.version.substr(1).split('.')[0] !== engines.node) {
  console.error(`Required node version ${version}, got: ${process.version}.`)
  process.exit(1)
}
