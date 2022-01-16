//! Global variables
var web3;
const hbscString = "HappyBirthdaySocialClub";

//! All setup needed on page load
window.onload = (event) => {
    try {
        web3 = new Web3('https://mainnet.infura.io/v3/4be1e97edf7947f4a8ddbeb2dad6e490');
        console.log('Successfully connected to Ethereum Node via Infura');
    }
    catch (e) {
        console.log(`ERROR ${e}`);
    }
}