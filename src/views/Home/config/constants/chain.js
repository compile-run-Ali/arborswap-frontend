export const RbaChain = {
  chainId: 159,
  chainName: 'RBAChain',
  isTestChain: true,
  isLocalChain: false,
  multicallAddress: '0xC6EE6fFb61E2941B1062c66de9d1042EbDf10684',
  getExplorerAddressLink: (address) => `https://rbascan.com/address/${address}`,
  getExplorerTransactionLink: (transactionHash) => `https://rbascan.com/tx/${transactionHash}`,
  // Optional parameters:
  rpcUrl: 'https://preseed-testnet-1.roburna.com/',
  blockExplorerUrl: 'https://rbascan.com/',
  nativeCurrency: {
    name: 'Roburna',
    symbol: 'RBA',
    decimals: 18,
  },
}
