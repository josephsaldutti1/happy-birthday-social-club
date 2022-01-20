//! Global variables

//! web3 object
var web3;

// String to sign
const hbscString = "HappyBirthdaySocialClub";

// Generascope address and ABI
var generascopeContractAddress = "0xf5308e067ff8490dd32e24b4b0c5934a789e4783";
var generascopeContractAbi = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ownerOf",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "tokenURI",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
]

// {
//     \"inputs\":[{
//     \"internalType\":\"uint256\",
//     \"name\":\"tokenId\",
//     \"type\":\"uint256\"}
//     ],
//     \"name\":\"tokenURI\",
//     \"outputs\":[{
//     \"internalType\":\"string\",
//     \"name\":\"\",
//     \"type\":\"string\"}

// {
//     \"inputs\":[{
//     \"internalType\":\"uint256\",
//     \"name\":\"tokenId\",
//     \"type\":\"uint256\"}
//     ],
//     \"name\":\"ownerOf\",
//     \"outputs\":[{
//     \"internalType\":\"address\",
//     \"name\":\"\",
//     \"type\":\"address\"}
//     ],
//     \"stateMutability\":\"view\",
//     \"type\":\"function\"}

//! All setup needed on page load
window.onload = (event) => {

    try {

        web3 = new Web3('https://mainnet.infura.io/v3/4be1e97edf7947f4a8ddbeb2dad6e490');
        console.log('Successfully connected to Ethereum Node via Infura');
    }

    catch (e) {

        console.log(`ERROR ${
e}
`);
    }

}
