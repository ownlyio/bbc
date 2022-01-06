import Web3 from "web3"

export const configureWeb3 = (provider = null) => {
    // Check if a provider exists
    if (!window.ethereum && !provider) {
        throw new Error('no ethereum provider detected')
    }

    // initialize Web3 with a custom provider if it exists
    if (provider) {
        return new Web3(provider);
    }

    // use window.ethereum instead
    return new Web3(window.ethereum);
};
