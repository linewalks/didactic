const express = require("express")
const program = require("commander")
const path = require("path")
const fs = require("fs")
const chalk = require("chalk")
const {
  getContractsFromPath,
  parseNameAndABIFromCompiledContract
} = require("./helpers/contracts")

const router = express.Router()

const defaultOptions = {
  port: "8081",
  contractsPath: "../build/contracts"
}

program
  .version("0.0.1")
  .option("-p, --port <n>", "Specify port", parseInt)
  .option("-c, --contractsPath <path>", "Specify path for compiled contracts")
  .parse(process.argv)

const {
  port = defaultOptions.port,
  contractsPath = defaultOptions.contractsPath
} = program

router.get("/contracts_meta", (req, res) => {
  const listOfContracts = getContractsFromPath(contractsPath)
  res.send(parseNameAndABIFromCompiledContract(listOfContracts))
})

router.get("/deployed_contracts", (req, res) => {
  res.send("About birds")
})

router.get("/networkInformation", (req, res) => {
  res.send({
    host: "localhost:3434",
    port: "8545",
    networkId: "*"
  })
})

module.exports = { router, port }
