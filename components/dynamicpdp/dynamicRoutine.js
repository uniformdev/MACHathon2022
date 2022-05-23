import Routine from "../Routine";

export default function dynamicProductRoutine({ component }) {
  const props = {
    component: {
      parameters: {
        url: {
          value: "/range",
        },
        entry: {
          value: component.data.routine,
        },
        cloudinary: {
          value: [
            {
              srcset: component.data.routine.image,
            },
          ],
        },
      },
    },
  };

  return <Routine {...props} />;
}
