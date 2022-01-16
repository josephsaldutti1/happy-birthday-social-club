
//! Get Ethereum balance from an address
async function getEthBalanceFromAddress() {

    let address = document.getElementById("addr").value;

    try {
        const balance = await web3.eth.getBalance(address);
        document.getElementById("balance").innerHTML = `${web3.utils.fromWei(balance, 'ether')} ETH`;
    }
    catch (e) {
        document.getElementById("balance").innerHTML = e;
    }
}