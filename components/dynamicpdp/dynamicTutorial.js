import Tutorial from "../Tutorial";

export default function dynamicProductTutorial({ component }) {
  const props = {
    component: {
      parameters: {
        entry: {
          value: component.data.tutorial,
        },
        cloudinary: {
          value: [
            {
              srcset: component.data.tutorial.image,
            },
          ],
        },
      },
    },
  };

  return <Tutorial {...props} />;

  return <pre>{JSON.stringify(component, null, 2)}</pre>;
}
