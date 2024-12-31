import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox-viem';
import { ancient8Sepolia } from 'viem/chains';
import * as Dotenv from 'dotenv';

Dotenv.config();

const config: HardhatUserConfig = {
  solidity: '0.8.20',
  networks: {
    ancient8Testnet: {
      url: 'https://rpcv2-testnet.ancient8.gg',
      accounts: [process.env.PRIVATE_KEY!],
    },
  },
  etherscan: {
    apiKey: {
      ancient8Testnet: 'ancient8Testnet', // apiKey is not required, just set a placeholder
    },
    customChains: [
      {
        network: 'ancient8Testnet',
        chainId: 28122024,
        urls: {
          browserURL: 'https://scanv2-testnet.ancient8.gg',
          apiURL: 'https://scanv2-testnet.ancient8.gg/api',
        },
      },
    ],
  },
};

export default config;
