import Card from "./Card";

export default function ProductCard({ component }) {
  const { url, ctaText } = component.parameters;
  const { name, description, price, images } = component.parameters.entry.value;

  return (
    <Card
      product={{
        name,
        description,
        price,
        images,
        url: url.value,
        ctaText: ctaText.value,
      }}
    />
  );
}
