import '@rainbow-me/rainbowkit/styles.css';
import {
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { config } from '../wagmi';
import {
  QueryClientProvider,
  QueryClient
} from "@tanstack/react-query";

interface ProviderProps {
    children: React.ReactNode;
}
const queryClient = new QueryClient();

const Provider = ({ children }: ProviderProps) => {
    return (
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider>
              {children}
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      );
}

export default Provider;