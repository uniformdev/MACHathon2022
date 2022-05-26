// This hook only calls the actual revalidate hook and immediately returns
// This is to avoid running into timeout problems

export default async function handler(req, res) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.NEXT_REVALIDATE_SECRET) {
    return res.status(401).json({ message: "Invalid token" });
  }

  fetch(
    `${req.headers.host.includes("localhost") ? "http" : "https"}://${
      req.headers.host
    }/api/revalidate?secret=${process.env.NEXT_REVALIDATE_SECRET}`
  ).catch(() => {});

  // Wait for 500ms to give chance to the fetch to establish connection
  await new Promise((resolve) => setTimeout(resolve, 500));

  return res.status(200).send();
}
