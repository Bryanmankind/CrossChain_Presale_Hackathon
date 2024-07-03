# Cross-Chain Presale Contract with Router Nitro

This project demonstrates a cross-chain presale contract using Router Nitro's cross-chain bridge. The goal is to allow users to purchase tokens from different networks with their assets. This project was built using Hardhat for the smart contract development and React for the frontend.

## Project Overview

- **Smart Contracts**: Developed using Hardhat.
- **Frontend**: Built with React.
- **Cross-Chain Bridge**: Implemented using Router Nitro's PATH_FINDER_API.

## Features

- **Cross-Chain Asset Purchases**: Users can buy tokens using assets from different networks.
- **Seamless User Experience**: The frontend provides an intuitive interface for interacting with the cross-chain presale contract.

## Requirements

- Node.js (v14 or later)
- npm (v6 or later)
- Hardhat
- React

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Bryanmankind/cross-chain-presale.git
cd crosschain_presale_dapp
```

### 2. Install Dependencies

#### Backend (Hardhat)

Navigate to the project root directory and install the required dependencies:

```bash
npm install
```

### 4. Compile Contracts

Compile the smart contracts using Hardhat:

```bash
npx hardhat compile
```

### 5. Deploy Contracts

Deploy the smart contracts to your chosen network:

```bash
npx hardhat run scripts/deploy.js --network your_network
```

### 6. Start the Local Blockchain (Optional)

If you want to test locally, you can start a local Hardhat node:

```bash
npx hardhat node
```

Deploy the contracts to the local node:

```bash
npx hardhat run scripts/deploy.js --network localhost
```

## Project Structure

```
cross-chain-presale/
  ├── contracts/              # Solidity smart contracts
  │   └── Presale.sol         # Presale contract
  ├── scripts/                # Deployment and interaction scripts
  │   └── deploy.js           # Deployment script
  ├── test/                   # Contract tests
  │   └── presale-test.js     # Test file for presale contract
  ├── frontend/               # React frontend
  │   ├── src/
  │   │   ├── components/     # React components
  │   │   ├── App.js          # Main React component
  │   │   └── index.js        # Entry point for React
  │   └── public/             # Public assets
  ├── hardhat.config.js       # Hardhat configuration file
  ├── package.json            # Node.js dependencies and scripts
  └── README.md               # Project documentation
```

## Usage

1. **Access the Frontend**: Open your browser and navigate to `http://localhost:3000`.
2. **Connect Wallet**: Connect your cryptocurrency wallet (e.g., MetaMask) to the desired network.
3. **Participate in Presale**: Use the interface to participate in the presale by purchasing tokens with assets from different networks.

## Technologies Used

- **Solidity**: Smart contract language.
- **Hardhat**: Development environment for compiling, testing, and deploying Ethereum smart contracts.
- **React**: Frontend library for building user interfaces.
- **Router Nitro**: Cross-chain bridge API for seamless asset transfers.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.

## License

This project is licensed under the MIT License.

---

Feel free to modify this README as per your project's specifics and requirements.