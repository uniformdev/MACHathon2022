import Head from "next/head";

import { CanvasClient, enhance, CANVAS_DRAFT_STATE } from "@uniformdev/canvas";
import { Composition, Slot } from "@uniformdev/canvas-react";
import { enhancers } from "../../enhancers";
import { resolveRenderer } from "../../components/ResolveRenderer";
import GlobalHeader from "../../components/GlobalHeader";
import GlobalFooter from "../../components/GlobalFooter";

export default function PdpPage({ composition }) {
  return (
    <div>
      <Head>
        <title>skncre - MACHathon 2022</title>
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

export async function getStaticProps(context) {
  const pdp = context?.params?.pdp;
  const slug = `/pdp/${pdp}`;

  const client = new CanvasClient({
    apiKey: process.env.UNIFORM_API_KEY,
    projectId: process.env.UNIFORM_PROJECT_ID,
    apiHost: process.env.UNIFORM_API_HOST,
  });

  let composition;

  if (slug === "/pdp/bundle") {
    const data = await fetch(
      "http://localhost:3000/api/product?slug=/pdp/bundle"
    );
    composition = await data.json();
  } else {
    const data = await client.getCompositionBySlug({
      slug,
      state: CANVAS_DRAFT_STATE,
    });

    composition = data.composition;

    await enhance({
      composition,
      enhancers,
      context: {},
    });
  }

  return {
    props: {
      composition,
    },
  };
}

export const getStaticPaths = () => {
  return {
    paths: [
      "/pdp/face-serum",
      "/pdp/face-cream",
      "/pdp/eye-contour",
      "/pdp/bundle",
    ],
    fallback: false,
  };
};
