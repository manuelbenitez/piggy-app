import { callPolicy, zksyncSsoConnector } from "zksync-sso/connector";
import { zksyncSepoliaTestnet } from "viem/chains";
import { createConfig, connect } from "@wagmi/core";
import { createClient, erc20Abi, http, parseEther, parseUnits } from "viem";

const ssoConnector = zksyncSsoConnector({
  // Optional session configuration, if omitted user will have to sign every transaction via Auth Server
  session: {
    expiry: "1 day",
  },
});

export const wagmiConfig = createConfig({
  chains: [zksyncSepoliaTestnet],
  connectors: [ssoConnector],
  client({ chain }) {
    return createClient({ chain, transport: http() });
  },
});

export const connectWithSSO = async () => {
  const { accounts, chainId } = await connect(wagmiConfig, {
    connector: ssoConnector,
    chainId: zksyncSepoliaTestnet.id,
  });

  return { accounts, chainId };
};
