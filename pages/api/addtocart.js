export default async function handler(req, res) {
  const {
    query: { productId },
  } = req;

  if (!productId) {
    res.status(400).json({ error: "No Product ID provided" });
  }

  var data = {
    line_items: [
      {
        quantity: 1,
        product_id: productId,
      },
    ],
  };

  const response = await fetch(
    `https://api.bigcommerce.com/stores/${process.env.BIGCOMMERCE_STORE_HASH}/v3/carts?include=redirect_urls`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Auth-Client": process.env.BIGCOMMERCE_CLIENT_ID,
        "X-Auth-Token": process.env.BIGCOMMERCE_API_TOKEN,
      },
      body: JSON.stringify(data),
    }
  );

  const result = await response.json();

  res.setHeader("Access-Control-Allow-Origin", "*");

  res.writeHead(302, {
    Location: result.data.redirect_urls.checkout_url,
  });

  res.end();
}
