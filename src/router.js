const express = require("express")
const program = require("commander")
const path = require("path")
const fs = require("fs")
const chalk = require("chalk")
const isEmpty = require("lodash/isEmpty")
const {
  getContractsFromPath,
  parseNameAndABIFromCompiledContract
} = require("./helpers/contracts")
const { getConfigFromExternalPath } = require("./helpers/getConfig")

const router = express.Router()

let config = getConfigFromExternalPath()

// Parsing input from command line
program
  .version("0.0.1")
  .option("-p, --port <n>", "Specify port", parseInt)
  .option("-c, --contractsPath <path>", "Specify path for compiled contracts")
  .parse(process.argv)

if (isEmpty(config) && (!program.port && program.contractsPath)) {
  console.log(
    chalk.red("Insufficient information to run didactic... terminating...")
  )
  process.exit(1)
}

const { port = config.port, contractsPath = config.contractsPath } = program

config = {
  ...config,
  port,
  contractsPath
}

router.get("/contracts_meta", (req, res) => {
  const listOfContracts = getContractsFromPath(contractsPath)
  res.send(parseNameAndABIFromCompiledContract(listOfContracts))
})

router.get("/network_information", (req, res) => {
  res.send(config)
})

module.exports = { router, port }
