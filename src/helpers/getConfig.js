import fs from "fs"
import chalk from "chalk"

export const getConfigFromExternalPath = path => {
  let configPath = "./config.json"
  if (path) {
    configPath = path
  }

  try {
    const config = JSON.parse(fs.readFileSync(configPath))

    const requiredConfigs = ["port", "contractsPath", "host", "networkId"]

    requiredConfigs.forEach(configKey => {
      if (!Object.keys(config).includes(configKey)) {
        console.log(
          chalk.yellow(
            `${configKey} is not provided; using default value as fallback`
          )
        )
      }
    })
    const {
      port = "8081",
      contractsPath = "../build/contracts",
      host = "http://localhost",
      networkId = "*",
      deployedContractsHashes = []
    } = config

    return {
      port,
      contractsPath,
      host,
      networkId,
      deployedContractsHashes
    }
  } catch (e) {
    console.log(
      chalk.yellow("Failed to load config from file, failing silently...")
    )
    return {}
  }
}
