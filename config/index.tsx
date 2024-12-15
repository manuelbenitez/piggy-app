import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { type Chain } from "viem";

import { zksyncSepoliaTestnet } from "viem/chains";
// Get projectId at https://cloud.walletconnect.com
const projectId = "0cedfda0129be050061a70628e835475";

if (!projectId) throw new Error("Project ID is not defined");

const metadata = {
  name: "Piggy App",
  description:
    "Own your music collection through Royalty Rights Tokens™ and earn from the success of the artists you support.",
  url: "https://www.coda.to", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/171242352?s=200&v=4"],
};

// Create wagmiConfig
const chains = [zksyncSepoliaTestnet] as const;

export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  enableCoinbase: false,
  enableInjected: false,
});
