import { Button } from '@mui/material'
import { TonConnectButton } from '@tonconnect/ui-react'
import { createWeb3Modal, defaultConfig, useWeb3Modal, useWeb3ModalAccount } from '@web3modal/ethers/react'


type Props = {}

const WalletModal = (_props: Props) => {
    // 1. Get projectId
const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
}

// 3. Create a metadata object
const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: import.meta.env.VITE_API_URL, // origin must match your domain & subdomain
  icons: [`${import.meta.env.VITE_API_URL}assets/image/logo.svg`]
}

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,

  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  rpcUrl: '...', // used for the Coinbase SDK
  defaultChainId: 0, // used for the Coinbase SDK
})



// 5. Create a Web3Modal instance
createWeb3Modal({
  ethersConfig,
  chains: [mainnet],
  projectId,
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})
const { open } = useWeb3Modal()
const { address } = useWeb3ModalAccount();
console.log('address=',address);
  return (
    <>
    <Button variant='contained' onClick={() => open()}>Trust Wallet</Button>
    {/* <w3m-button/> */}
    <TonConnectButton/>
    </>
  )
}

export default WalletModal