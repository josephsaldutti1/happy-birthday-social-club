//! Set Output message
function setOutputText (text) {
    document.getElementById("outputText").innerHTML = text;
}


//! Get Ethereum balance from an address
async function getEthBalanceFromAddress () {

    let address = document.getElementById("addr").value;

    try {
        let balance = await web3.eth.getBalance(address);
        document.getElementById("balance").innerHTML = `${web3.utils.fromWei(balance, "ether")} ETH`;
    }
    catch (e) {
        setOutputText(e);
    }
}


//! Login
async function login() {

    // Recover signed message
    let signedMessage = document.getElementById("signedMessage").value;

    // Get hash of message + prefix
    let messageHash;
    try {
        messageHash = await web3.eth.accounts.hashMessage(hbscString);
    }
    catch (e) {
        setOutputText(e);
    }

    // Recover address
    let recoveredAddress;
    try {
        console.log(`0x${signedMessage.slice(2, 66)}`);
        console.log(`0x${signedMessage.slice(66, 130)}`);
        console.log(`0x${signedMessage.slice(130, 132)}`);
        recoveredAddress = await web3.eth.accounts.recover({
            messageHash: messageHash,
            r: `0x${signedMessage.slice(2, 66)}`,
            s: `0x${signedMessage.slice(66, 130)}`,
            v: `0x${signedMessage.slice(130, 132)}`,
        });
    }
    catch (e) {
        setOutputText(e);
    }

    // Check that the recovered address matches the address the user entered
    let userAddress = document.getElementById("userAddress").value;
    if (userAddress != recoveredAddress) {
        setOutputText("Failed to authenticate. Signature is invalid");
        return;
    } else {
        setOutputText("Successfully authenticated!")
    }

    // Check that the user has the HBSC NFT
    //TODO
}