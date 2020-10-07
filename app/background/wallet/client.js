import { makeClient } from '../ipc/ipc';

export const clientStub = ipcRendererInjector => makeClient(ipcRendererInjector, 'Wallet', [
  'start',
  'getAPIKey',
  'getWalletHeight',
  'getWalletInfo',
  'getAccountInfo',
  'getCoin',
  'getNames',
  'getNameStateByName',
  'createNewWallet',
  'importSeed',
  'generateReceivingAddress',
  'getAuctionInfo',
  'getTransactionHistory',
  'getTX',
  'getPendingTransactions',
  'getBids',
  'getMasterHDKey',
  'setPassphrase',
  'revealSeed',
  'estimateTxFee',
  'estimateMaxSend',
  'rescan',
  'reset',
  'sendOpen',
  'sendBid',
  'sendUpdate',
  'sendReveal',
  'sendRedeem',
  'sendRenewal',
  'sendTransfer',
  'cancelTransfer',
  'finalizeTransfer',
  'finalizeWithPayment',
  'claimPaidTransfer',
  'revokeName',
  'send',
  'lock',
  'unlock',
  'isLocked',
  'getNonce',
  'importNonce',
  'zap',
  'importName',
  'rpcGetWalletInfo',
]);