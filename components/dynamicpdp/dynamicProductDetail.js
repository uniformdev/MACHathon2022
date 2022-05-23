import ProductDetail from "../ProductDetail";

export default function dynamicProductDetail({ component }) {
  const props = {
    component: {
      parameters: {
        ctaText: "add to cart",
        entry: {
          value: component.data.product,
        },
      },
    },
  };

  return <ProductDetail {...props} />;
}
