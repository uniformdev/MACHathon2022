import contentstack from "contentstack";
import {
  CanvasClient,
  EnhancerBuilder,
  enhance,
  CANVAS_DRAFT_STATE,
  CANVAS_PUBLISHED_STATE,
} from "@uniformdev/canvas";

export default async function dynamicProduct(slug, preview) {
  const contentstackClient = contentstack.Stack({
    api_key: process.env.CONTENTSTACK_API_KEY,
    delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN,
    environment: "development",
    region: contentstack.Region.US,
  });

  const query = contentstackClient.ContentType("product").Query();
  const product = await query
    .where("url", slug)
    .includeReference([
      "modular_blocks.routine.reference",
      "modular_blocks.tutorial.reference",
    ])
    .toJSON()
    .find();

  const { id, name, description, price, images } =
    product[0][0]?.bigcommerce_product?.data[0];

  const dynamicProductDetailData = {
    id,
    name,
    product_description: description,
    price,
    images: images?.reverse().map((image) => {
      return `https://res.cloudinary.com/dwfcofnrd/image/fetch/c_fill,ar_1:1,q_auto,f_auto/${image.url_zoom}`;
    }),
  };

  const modularBlocks = product[0][0].modular_blocks;
  let dynamicTutorialData = {};
  let dynamicRoutineData = {};

  modularBlocks.forEach((mod) => {
    for (const block in mod) {
      if (block === "tutorial") {
        const { uid, steps, title, image } = mod[block].reference[0];

        dynamicTutorialData = {
          uid,
          steps,
          title,
          image: `https://res.cloudinary.com/dwfcofnrd/image/fetch/${image.url}`,
        };
      }

      if (block === "routine") {
        const { chapeau, copy, cta, image, title } = mod[block].reference[0];

        dynamicRoutineData = {
          chapeau,
          copy,
          cta,
          image: `https://res.cloudinary.com/dwfcofnrd/image/fetch/${image.url}`,
          title,
        };
      }
    }
  });

  const canvasClient = new CanvasClient({
    apiKey: process.env.UNIFORM_API_KEY,
    projectId: process.env.UNIFORM_PROJECT_ID,
    apiHost: process.env.UNIFORM_API_HOST,
  });

  const { composition } = await canvasClient.getCompositionBySlug({
    slug: "/dynamic-product",
    state: preview ? CANVAS_DRAFT_STATE : CANVAS_PUBLISHED_STATE,
  });

  const enhancers = new EnhancerBuilder()
    .component("dynamicProductDetail", (dynamicProductDetail) =>
      dynamicProductDetail.data("product", () => {
        return dynamicProductDetailData;
      })
    )
    .component("dynamicTutorial", (dynamicTutorial) =>
      dynamicTutorial.data("tutorial", () => {
        return dynamicTutorialData;
      })
    )
    .component("dynamicRoutine", (dynamicRoutine) =>
      dynamicRoutine.data("routine", () => {
        return dynamicRoutineData;
      })
    );

  await enhance({
    composition,
    enhancers,
    context: { preview },
  });

  return composition;
}
