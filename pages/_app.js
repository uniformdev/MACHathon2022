import "../styles/globals.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { UniformContext } from "@uniformdev/context-react";
import { Context, enableContextDevTools } from "@uniformdev/context";
import manifest from "../lib/contextManifest.json";

const context = new Context({
  manifest,
  defaultConsent: true,
  plugins: [enableContextDevTools()],
});

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <UniformContext context={context}>
        <Component {...pageProps} />
      </UniformContext>
    </ParallaxProvider>
  );
}

export default MyApp;
