import { compose, EnhancerBuilder } from "@uniformdev/canvas";

import {
  createContentstackEnhancer,
  CANVAS_CONTENTSTACK_PARAMETER_TYPES,
} from "@uniformdev/canvas-contentstack";

import {
  createBigCommerceClient,
  createBigCommerceEnhancer,
  CANVAS_BIGCOMMERCE_PARAMETER_TYPES,
} from "@uniformdev/canvas-bigcommerce";

import contentstack from "contentstack";

const client = contentstack.Stack({
  api_key: process.env.CONTENTSTACK_API_KEY,
  delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN,
  environment: "development",
  region: contentstack.Region.US,
});

const contentstackEnhancer = createContentstackEnhancer({ client });

export const contentstackModelCleaner = ({ parameter }) => {
  Object.keys(parameter.value).map((key) => {
    if (
      key === "_version" ||
      key === "locale" ||
      key === "ACL" ||
      key === "_in_progress" ||
      key === "created_at" ||
      key === "created_by" ||
      key === "tags" ||
      key === "image" ||
      key === "updated_at" ||
      key === "updated_by" ||
      key === "publish_details"
    ) {
      delete parameter.value[key];
    }
  });

  return parameter.value;
};

function createSrcSet(
  baseUrl,
  version,
  baseOptions,
  widths,
  ratio,
  transformation
) {
  const result = [];

  widths.split(",").forEach((width) => {
    let transforms = `${
      transformation ? transformation : baseOptions || "q_auto,f_auto"
    },w_${width}`;

    if (ratio) {
      transforms = `${
        transformation ? transformation : baseOptions
      },ar_${ratio},c_fill,w_${width}`;
    }

    const url = baseUrl.replace(`v${version}`, transforms);

    result.push(`${url} ${width}w`);
  });

  return result.join(",");
}

export const CANVAS_CLOUDINARY_PARAMETER_TYPES = "cloudinary-parameter";
export const cloudinaryEnhancer = ({ parameter }) => {
  const result = parameter.value.map((media) => {
    return {
      width: media.width,
      height: media.height,
      alt: media.alt,
      caption: media.caption,
      srcset: media.widths
        ? createSrcSet(
            media.url,
            media.version,
            media.options,
            media.widths,
            media.ratio || false,
            media.transformation || false
          )
        : null,
    };
  });

  parameter.value = result;

  return parameter.value;
};

export const bigCommerceModelCleaner = ({ parameter }) => {
  const { id, name, price, images, description, custom_fields } =
    parameter.value;

  parameter.value = {
    id,
    name,
    description: custom_fields
      ? custom_fields.filter((field) => field.name === "ShortDescription")[0]
          .value
      : "",
    product_description: description,
    price,
    ingredients: custom_fields
      ? custom_fields.filter((field) => field.name === "Ingredients")[0].value
      : "",
    images: images?.reverse().map((image) => {
      return `https://res.cloudinary.com/dwfcofnrd/image/fetch/c_fill,ar_1:1,q_auto,f_auto/${image.url_zoom}`;
    }),
  };

  return parameter.value;
};

export const bigCommerceClient = createBigCommerceClient({
  storeHash: process.env.BIGCOMMERCE_STORE_HASH,
  token: process.env.BIGCOMMERCE_API_TOKEN,
});

export const bigCommerceEnhancer = () =>
  createBigCommerceEnhancer({
    client: bigCommerceClient,
    createProductOptions: () => {
      return {
        include: ["images", "custom_fields"],
        include_fields: ["id", "name", "price", "description"],
      };
    },
    createProductQueryOptions: () => {
      return {
        include: ["images", "custom_fields"],
        include_fields: ["id", "name", "price", "description"],
      };
    },
  });

export const enhancers = new EnhancerBuilder()
  .parameterType(
    CANVAS_BIGCOMMERCE_PARAMETER_TYPES,
    compose(bigCommerceEnhancer(), bigCommerceModelCleaner)
  )
  .parameterType(CANVAS_CLOUDINARY_PARAMETER_TYPES, cloudinaryEnhancer)
  .parameterType(
    CANVAS_CONTENTSTACK_PARAMETER_TYPES,
    compose(contentstackEnhancer, contentstackModelCleaner)
  );
