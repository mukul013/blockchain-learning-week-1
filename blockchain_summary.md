# BLOCKCHAIN
- Blockchain is a distributed database which store data of transactions.
- It's a Decentralized Database (controlled by various authorities & not owned by any centralized party) that contains traces of assets and transactions across the entire network.
- The records or decentralized ledgers are immutable (cannot be changed or modified).

### BLOCKCHAIN vs TRADITIONAL DATABASES

A database is basically where we store and access our data. There are many types of traditional databases one of the most popular one is RDMS where we use rows and columns to store our data.
Your data is store in centralized database means that the control of the database reside with designated authority. The data can be modified or even deleted if the security of the database is compromised.

|  | TRADITIONAL DATABASE |  BLOCKCHAIN |
| ------ | ------ | ------ |
| CONTROL | Centralized | Decentralized |
| OPERATIONS | All CRUD (create,read,update,delete) operations can be performed on the data. | It's a append only structure means users can only append more data in the form of additional blocks. Only READ & WRITE operations can be performed.|
| SECURITY | Less Secure - Anyone with sufficient access to centralized database can alter with your data. For eg. Youtube can take down any of your video without your permission if it violates their community guidelines or channel can be hacked. | More Secure because of decentralized data storage & cryptography in blockchain.

### BLOCKS IN BLOCKCHAIN
- Blocks are connected in a linear chain to form Blockchain.
- Detailed information about transactions can be found in each block.
- The hash of the previous block connects all blocks linearly.
- Block headers contain the previous block hash, the current block hash, the nonce, the Merkle root, and other information.

![BLOCK](https://ghostvolt.com/assets/img/articles/chains.png)

### Working of Blockchain
#
| Transaction Creation | Verification |  Block Addition |
| ------ | ------ | ------ |
| You create a digital "transaction message" that says, "I am sending 0.1 bitcoin to my friend."  That message includes your friend's address (like their digital wallet address) and a digital signature to prove you are sending the money. | Now, your transaction message goes out to a network of computers called nodes. The nodes check your message to make sure it's valid and that you have enough money to send. They also verify your digital signature to confirm it's really you making the request. If everything is correct , the transaction is marked as 'confirmed'. | Transactions that are confirmed are grouped together into a "block." Think of a block like a container that can hold several succeeded transactions. Confirmed transaction is now part of the blockchain, which is a public ledger that keeps a record of all transactions ever made. |

### ROLE OF MINERS
Miners (special computers in the network) compete to solve a complex math puzzle, and the first one to solve it gets the right to add the block to the blockchain.
Once a miner adds a block, it's linked to the previous block in the chain. This link makes it very hard for anyone to change a transaction in a previous block because they'd have to change all the blocks that come after it.

### Consensus In a Blockchain Network 
 - Everyone agrees on the rules (like how to validate transactions and add them to the blockchain).
 - Transactions are shown to the network, and everyone checks to make sure they're valid.
 - If most of the network agrees that the transactions are good, they get added to the blockchain.
 
### Key Components
##
| BLOCK | CHAIN |  MINER |
| ------ | ------ | ------ |
| Block typically contains a group of transactions that have been verified and approved to be added to the blockchain. | Chain basically links blocks together in linear fashion which ensures the security and immutability in blockchain.  | Miner is basically a special computer which compete to solve a complex math puzzle, and the first one to solve it gets the right to add the block to the blockchain. |

### Significance of Cryptographic Hash Functions in Linking Blocks

- Cryptographic hash function takes all the transactions data & some additional data and produces a fixed-length string of characters, which is called the hash value.
- Hash value is like a unique identifier for your specific block.
 - Each block also contains the hash value of previous block so it can links the block together like a chain.
- Hashing make the blockchain more **secure** because you can't take the hash value and generate data from it , basically it is irreversible.
 - It makes the blockchain more efficient which is crucial for the speedy verification and addition of blocks to the blockchain.


### Cryptocurrency & How it Relates to Blockchain

- Cryptocurrency is like a digital or virtual currency that uses cryptography (complex math and computer science techniques) for security.
- It does not have any physical existence like coin or bills.
- Cryptocurrencies are designed to be more secure, transparent & private.

Blockchain is the technology that is behind many cryptocurrencies like bitcoin , etherieum etc. It is like a digital ledger for **transparency** that records all transactions in a secure and unchangeable way.
For eg. Sending or receiving Bitcoin, those transactions are recorded on a blockchain.

Cryptocurrency transactions involve the transfer of ownership from one digital wallet (a blockchain address) to another. These transactions are verified & recorded on the blockchain by a network of computer  referred as nodes or miners.

Cryptocurrency transactions occur directly between users in a peer-to-peer fashion, without the need for any central authority like banks which makes it **decentralized.**


| Wallets | Public/Private Keys |  Addresses |
| ------ | ------ | ------ |
| A cryptocurrency wallet is like a digital software that allows users to store, manage, and interact with their cryptocurrencies. | **Public Key:** This is like your cryptocurrency account number. It's a long string of characters that you can share with others to receive funds. However, it's safe to share because it can only be used to receive funds; it cannot be used to withdraw the funds.  | A cryptocurrency address is a shorter and more user-friendly representation of a public key.  |
| Wallet does not actually store any cryptocurrency but holds the private keys (like passwords) that provide access to the cryptocurrencies on the blockchain. | **Private Key:** This is like the secret password to your cryptocurrency account. It's a secret, unique, and cryptographically secure key that should never be shared with anyone. It's used to sign transactions and gain access to your cryptocurrency holdings. | It's what you give to others when you want them to send you cryptocurrency. |