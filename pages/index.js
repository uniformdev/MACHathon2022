import Head from "next/head";

import { CanvasClient, enhance } from "@uniformdev/canvas";
import { Composition, Slot } from "@uniformdev/canvas-react";
import { enhancers } from "../enhancers";
import { resolveRenderer } from "../components/ResolveRenderer";

export default function IndexPage({ composition }) {
  return (
    <div>
      <Head>
        <title>skncre - MACHathon2022</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Composition data={composition} resolveRenderer={resolveRenderer}>
        <Slot name="main" />
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
