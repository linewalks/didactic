# Didactic

> A minimalistic express api server that servers smart contract's abi for dApp clients.

# Running didactic

### 1. Compile your smart contracts using truffle (Where your output should be in `json` format)

### 2. Run didactic and specify contract path

> `didactic --contractPath ../build --port 5757`

> `didactic` will use default configuration settings

# Accessing endpoints

1. `$ curl localhost:5757/contracts_meta`
1. Response
   ```json
   [
     {
       "name": "MetaCoin",
       "contractABI": [ ... ]
     },
     {
       "name": "MetaCoinMint",
       "contractABI": [ ... ]
     }
   ]
   ```
1. `$ curl localhost:5757/network_information`

# Configuration

```json
{
  "contractPath": "../build", // relative path,
  "host": "http://localhost",
  "networkId": "*",
  "port": "8544",
  // optional
  "deployedContractsHashes": [
    {
      "PatientRegistrar": "0xAA...",
      "Provider": "0xBB..."
    }
  ]
}
```
