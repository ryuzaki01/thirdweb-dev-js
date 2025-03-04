import type { Chain } from "../src/types";
export default {
  "name": "IoTeX Network Mainnet",
  "chain": "iotex.io",
  "rpc": [
    "https://iotex-network.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://babel-api.mainnet.iotex.io"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "IoTeX",
    "symbol": "IOTX",
    "decimals": 18
  },
  "infoURL": "https://iotex.io",
  "shortName": "iotex-mainnet",
  "chainId": 4689,
  "networkId": 4689,
  "explorers": [
    {
      "name": "iotexscan",
      "url": "https://iotexscan.io",
      "standard": "EIP3091"
    }
  ],
  "icon": {
    "url": "ipfs://QmQKHQrvtyUC5b5B76ke5GPTGXoGTVCubXS6gHgzCAswKo",
    "width": 250,
    "height": 250,
    "format": "png"
  },
  "testnet": false,
  "slug": "iotex-network"
} as const satisfies Chain;