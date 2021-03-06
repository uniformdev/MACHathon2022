import Head from "next/head";
import dynamic from "next/dynamic";

import {
  CanvasClient,
  CANVAS_DRAFT_STATE,
  CANVAS_PUBLISHED_STATE,
  enhance,
} from "@uniformdev/canvas";
import { Composition, Slot } from "@uniformdev/canvas-react";
import { enhancers } from "../enhancers";
import { resolveRenderer } from "../components/ResolveRenderer";
import GlobalHeader from "../components/GlobalHeader";
import GlobalFooter from "../components/GlobalFooter";
import previewEnabled from "../preview/previewEnabled";

const PreviewDevPanel = dynamic(() =>
  import("../preview/PreviewDevPanel/PreviewDevPanel")
);

export default function IndexPage({ preview, composition }) {
  return (
    <div>
      <Head>
        <title>skncre - MACHathon2022</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="skncre - MACHathon2022"></meta>
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

        {previewEnabled() && (
          <PreviewDevPanel preview={preview} composition={composition} />
        )}
      </Composition>
    </div>
  );
}

export async function getStaticProps(context) {
  const { preview } = context;
  const previewActive = Boolean(preview);

  const client = new CanvasClient({
    apiKey: process.env.UNIFORM_API_KEY,
    projectId: process.env.UNIFORM_PROJECT_ID,
    apiHost: process.env.UNIFORM_API_HOST,
  });

  const { composition } = await client.getCompositionBySlug({
    slug: "/",
    state: preview ? CANVAS_DRAFT_STATE : CANVAS_PUBLISHED_STATE,
  });

  await enhance({
    composition,
    enhancers,
    context: { preview },
  });

  return {
    props: {
      composition,
      preview: previewActive,
    },
  };
}
