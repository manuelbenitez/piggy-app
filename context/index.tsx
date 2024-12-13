import { ReactNode } from "react";
import { State, WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { wagmiConfig } from "../zksyncSSO";

// Setup queryClient
const queryClient = new QueryClient();
const projectId = "0cedfda0129be050061a70628e835475";
if (!projectId) throw new Error("Project ID is not defined");

export default function Web3ModalProvider({
  children,
  initialState,
}: {
  children: ReactNode;
  initialState?: State;
}) {
  return (
    <WagmiProvider config={wagmiConfig} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
