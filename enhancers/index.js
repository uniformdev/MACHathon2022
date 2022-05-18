import { compose, EnhancerBuilder } from "@uniformdev/canvas";

import {
  createBigCommerceClient,
  createBigCommerceEnhancer,
  CANVAS_BIGCOMMERCE_PARAMETER_TYPES,
} from "@uniformdev/canvas-bigcommerce";

export const bigCommerceClient = createBigCommerceClient({
  storeHash: process.env.BIGCOMMERCE_STORE_HASH,
  token: process.env.BIGCOMMERCE_API_TOKEN,
});

export const bigCommerceEnhancer = () =>
  createBigCommerceEnhancer({
    client: bigCommerceClient,
    createProductOptions: () => {
      return {
        include_fields: ["id", "name", "price", "description"],
      };
    },
    createProductQueryOptions: () => {
      return {
        include_fields: ["id", "name", "price", "description"],
      };
    },
  });

export const enhancers = new EnhancerBuilder().parameterType(
  CANVAS_BIGCOMMERCE_PARAMETER_TYPES,
  compose(bigCommerceEnhancer(), bigCommerceModelCleaner)
);
