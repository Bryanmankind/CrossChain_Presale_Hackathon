
function App() {
  const PATH_FINDER_API_URL = "https://api.pf.testnet.routerprotocol.com/api";

// Makes an HTTP GET Request to the Nitro Pathfinder API to get quote data
const getQuote = async (params) => {
    const endpoint = "v2/quote";
    const quoteUrl = `${PATH_FINDER_API_URL}/${endpoint}`;

    console.log(quoteUrl);

    try {
        const res = await axios.get(quoteUrl, { params });
        return res.data;
    } catch (e) {
        console.error(`Fetching quote data from pathfinder: ${e}`);
    }
}

// Fetch the current allowance, update it if necessary, and set a new allowance
const checkAndSetAllowance = async (wallet, tokenAddress, approvalAddress, amount) => {
    // Transactions with the native token don't need approval
    if (tokenAddress === ethers.constants.AddressZero) {
        return;
    }

    // Using the provided token address and the ERC20 ABI, create an instance of the ERC20 contract
    const erc20 = new ethers.Contract(tokenAddress, erc20_abi, wallet);
    const allowance = await erc20.allowance(await wallet.getAddress(), approvalAddress);
    if (allowance.lt(amount)) {
        const approveTx = await erc20.approve(approvalAddress, amount, { gasPrice: await wallet.provider.getGasPrice() });
        try {
            await approveTx.wait();
            console.log(`Transaction mined successfully: ${approveTx.hash}`);
        } catch (error) {
            console.log(`Transaction failed with error: ${error}`);
        }
    } else {
        console.log("Enough allowance");
        alert("Enough allowance");
    }
}

// This function is responsible for actually executing the transaction
const getTransaction = async (params, quoteData) => {
    const endpoint = "v2/transaction";
    const txDataUrl = `${PATH_FINDER_API_URL}/${endpoint}`;

    console.log(txDataUrl);

    try {
        const res = await axios.post(txDataUrl, {
            ...quoteData,
            slippageTolerance: 0.5,
            senderAddress: account,
            receiverAddress: account,
        });
        return res.data;
    } catch (e) {
        console.error(`Fetching transaction data from pathfinder: ${e}`);
    }
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
