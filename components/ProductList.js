import { Slot } from "@uniformdev/canvas-react";

export default function ProductList({ component }) {
  const { title } = component.parameters;
  return (
    <section className="bg-tertiary">
      <h3 className="text-5xl pt-12 mb-12 font-semibold text-center">
        {title.value}
      </h3>

      <div className="grid grid-cols-2 gap-12 mx-12 pb-32">
        <Slot name="product1" />
        <Slot name="product2" />
      </div>
    </section>
  );
}
