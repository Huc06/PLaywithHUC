import "@rainbow-me/rainbowkit/styles.css";
import { darkTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { config } from "../wagmi";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const ancient8Theme = darkTheme({
  accentColor: "white",
  accentColorForeground: "#53c709",
});

interface ProviderProps {
  children: React.ReactNode;
}
const queryClient = new QueryClient();

const Provider = ({ children }: ProviderProps) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={ancient8Theme}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default Provider;
