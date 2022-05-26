import { CanvasClient } from "@uniformdev/canvas";

export default async function handler(req, res) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.NEXT_REVALIDATE_SECRET) {
    return res.status(401).json({ message: "Invalid token" });
  }

  // If fired immediately, there's a chance the systems are not yet done
  // with populating the cache, let's wait for 2 seconds before proceeding
  await new Promise((resolve) => setTimeout(resolve, 2000));

  try {
    const client = new CanvasClient({
      apiKey: process.env.UNIFORM_API_KEY,
      projectId: process.env.UNIFORM_PROJECT_ID,
      apiHost: process.env.UNIFORM_API_HOST,
    });

    const pages = await client.getCompositionList({
      skipEnhance: true,
    });

    await Promise.all(
      pages.compositions
        .map((c) => c.composition._slug)
        .filter((slug) => slug)
        .map((slug) => res.unstable_revalidate(slug))
    );

    return res.json({ revalidated: true });
  } catch (err) {
    console.error(err);
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send("Error revalidating");
  }
}
