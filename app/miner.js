//
// class Miner {
//   constructor(blockchain, p2pServer) {
//     this.blockchain = blockchain;
//     this.p2pServer = p2pServer;
//   }
//
//   mine() {
//     const validTransactions = this.transactionPool.validTransactions();
//     validTransactions.push(
//       Transaction.rewardTransaction(this.wallet, Wallet.blockchainWallet())
//     );
//     const block = this.blockchain.addBlock(validTransactions);
//     this.p2pServer.syncChains();
//     this.transactionPool.clear();
//     this.p2pServer.broadcastClearTransactions();
//
//     return block;
//   }
// }
//
// module.exports = Miner;
