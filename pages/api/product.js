import contentstack from "contentstack";

export default async function handler(req, res) {
  const {
    query: { slug },
  } = req;

  if (!slug) {
    res.status(400).json({ error: "No slug provided" });
  }

  const client = contentstack.Stack({
    api_key: process.env.CONTENTSTACK_API_KEY,
    delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN,
    environment: "development",
    region: contentstack.Region.US,
  });

  const query = client.ContentType("product").Query();
  const product = await query
    .where("url", slug)
    .includeReference([
      "modular_blocks.routine.reference",
      "modular_blocks.tutorial.reference",
    ])
    .toJSON()
    .find();

  res.status(200).json({ product });
}
