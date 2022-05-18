import Head from "next/head";

import { CanvasClient, enhance } from "@uniformdev/canvas";
import { Composition, Slot } from "@uniformdev/canvas-react";
import { enhancers } from "../enhancers";
import { resolveRenderer } from "../components/ResolveRenderer";
import GlobalHeader from "../components/GlobalHeader";
import GlobalFooter from "../components/GlobalFooter";

export default function IndexPage({ composition }) {
  return (
    <div>
      <Head>
        <title>skncre - MACHathon2022</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Composition
        data={composition}
        resolveRenderer={resolveRenderer}
        behaviorTracking="onLoad"
      >
        <GlobalHeader />
        <main className="mx-auto" style={{ maxWidth: "1440px" }}>
          <Slot name="main" />
        </main>
        <GlobalFooter />
      </Composition>
    </div>
  );
}

export async function getStaticProps() {
  const client = new CanvasClient({
    apiKey: process.env.UNIFORM_API_KEY,
    projectId: process.env.UNIFORM_PROJECT_ID,
    apiHost: process.env.UNIFORM_API_HOST,
  });

  const { composition } = await client.getCompositionBySlug({
    slug: "/",
  });

  await enhance({
    composition,
    enhancers,
    context: {},
  });

  return {
    props: {
      composition,
    },
  };
}
