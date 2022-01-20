# Happy Birthday Social Club

NFT login-based Happy Birthday Social Club


# NFT login with private key signature

In order to login, the user must provide their Ethereum address. This will be used to query whether this user owns a HBSC NFT.
The ETH address can usually be easily found within the user's wallet.

The user must also verify that they are the owner of the ETH address that they are providing!
This is done via private key signature. We ask the user to sign the message "HappyBirthdaySocialClub" using their private key.

# Tools

web3.js is used to query the Ethereum database and to verify signatures: https://web3js.readthedocs.io/en/v1.2.11/index.html

Infura is used to connect to the Ethereum network: https://infura.io/

# Signing the message

Ideally, a user's wallet will provide them the functionality to sign an arbitrary message. This is the easiest way to get a signature. This is not supported yet ..

To support: MyCryptoWallet signature why is it not working?

The signature is needed to login. This signature will not change for your account unless we change the message you are required to sign ("HappyBirthdaySocialClub"). You can store the signature for re-use if you would not like to go through these steps each time you login. Note that anyone who is able to find this signature will be able to use it to log in to HBSC provided they know your address or public key as well. However, someone with this signature and/or your address or public key will NOT be able to access your private key or tamper with your wallet.

The user will need to know their private key and follow the steps below:

Install node.js

Check that node.js is installed by using `node -v`. This should give the version number.

After you have installed node.js, install web3.js via `npm install web3`.

Use `node` to start node.js. Once node.js is running, use the following commands:

`var Web3 = require("web3")` -> Defines the Web3 Object from web3.js\
`var web3 = new Web3()` -> Creates a web3 object\
`web.eth.accounts.sign("HappyBirthdaySocialClub", <private_key>)` -> Signs the message with your private key. The private key should be in quotes, start with "0x", and have 32bytes of data

You should see an output similar to the following:

```
{
  message: 'HappyBirthdaySocialClub',
  messageHash: '0xXXXX...',
  v: '0xXX',
  r: '0xXXXX...',
  s: '0xXXXX...',
  signature: '0xXXXX...'
}
```

You should use the signature as the input for login.

# Verifying the signature

In order to verify the signature, we need the message, the signature, and the public key of the user.

The message has been decided already, and the user provides the signature.

We can use the recover API from web3.js to recover the user's address based on the message signature. If the addresses match, the signature and thus the address is verified.

# Checking ownership of the NFT

We can use the web3.js APIs to query the Ethereum contract associated with HBSC. We can then check ownership of each token.

For performance, we should mantain a database with the public keys of all the owners of the tokens and check against this during login. The database can be updated every time we see a transaction for this contract. See bloom filters for a performant way to do this: https://web3js.readthedocs.io/en/v1.2.6/web3-utils.html