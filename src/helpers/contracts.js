const fs = require("fs")
const path = require("path")

const getContractsFromPath = contractsPath => {
  return fs.readdirSync(contractsPath).map(p => path.join(contractsPath, p))
}

const parseNameAndABIFromCompiledContract = pathToCompiledContracts =>
  pathToCompiledContracts.map(contractPath => ({
    name: JSON.parse(fs.readFileSync(contractPath)).contractName,
    abi: JSON.parse(fs.readFileSync(contractPath)).abi
  }))

module.exports = {
  getContractsFromPath,
  parseNameAndABIFromCompiledContract
}
