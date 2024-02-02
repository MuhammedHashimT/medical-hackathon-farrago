import {
  ThirdwebProvider,
  ConnectWallet,
  localWallet,
  embeddedWallet,
} from "@thirdweb-dev/react";

export default function App() {
  return (
    <ThirdwebProvider
      activeChain="mumbai"
      clientId="YOUR_CLIENT_ID"
      locale={en()}
      supportedWallets={[
        localWallet(),
        embeddedWallet({
          auth: {
            options: ["email", "google", "apple", "facebook"],
          },
        }),
      ]}
    >
      <ConnectWallet theme={"dark"} modalSize={"wide"} />
    </ThirdwebProvider>
  );
}
