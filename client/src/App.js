import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import Home from "./components/index/index.js"
import { RouterProvider } from "react-router-dom";
import { router } from "./lib/routes";

// rainbowkit import
import '@rainbow-me/rainbowkit/styles.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';

import { getDefaultWallets, RainbowKitProvider, Chain } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [mainnet],
  [
    alchemyProvider({ apiKey: 's8TOMw4LvVa9bvRU-cab67-LOwtUy8xG' }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Supply Chain',
  projectId: 'c71f6f4c5aa7344af9370567c6dfe038',
  chains
});

const wagmiClient = createClient({ autoConnect: true, connectors, provider })
// end rainbowkit setup

export default function App() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
    <>
    <RouterProvider router={router}/>
    {/* <div className="container">
      <main className="main">
        <h1 className="title">
          Welcome to <a href="https://thirdweb.com/">thirdweb</a>!
        </h1>

        <p className="description">
          Get started by configuring your desired network in{" "}
          <code className="code">src/index.js</code>, then modify the{" "}
          <code className="code">src/App.js</code> file!
        </p>

        <div className="connect">
          <ConnectWallet dropdownPosition={{ side: 'bottom', align: 'center'}} />
        </div>

        <div className="grid">
          <a href="https://portal.thirdweb.com/" className="card">
            <h2>Portal &rarr;</h2>
            <p>
              Guides, references and resources that will help you build with
              thirdweb.
            </p>
          </a>

          <a href="https://thirdweb.com/dashboard" className="card">
            <h2>Dashboard &rarr;</h2>
            <p>
              Deploy, configure and manage your smart contracts from the
              dashboard.
            </p>
          </a>

          <a href="https://portal.thirdweb.com/templates" className="card">
            <h2>Templates &rarr;</h2>
            <p>
              Discover and clone template projects showcasing thirdweb features.
            </p>
          </a>
        </div>
      </main>
  </div> */}</>
        </RainbowKitProvider>
    </WagmiConfig>
  );
}
