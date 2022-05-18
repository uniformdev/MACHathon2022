export default function Hero({ component }) {
  const { chapeau, title, subTitle } = component.parameters.entry.value;
  const { srcset } = component.parameters.cloudinary.value[0];
  return (
    <section
      style={{ margin: "0 0 1rem 0", padding: "1rem", background: "#ddd" }}
    >
      <h1>
        {chapeau} {title}
      </h1>
      <h2>{subTitle}</h2>
      <img width={400} srcSet={srcset} alt="" />
    </section>
  );
}
