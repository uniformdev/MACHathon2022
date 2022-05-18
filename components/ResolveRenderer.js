import { DefaultNotImplementedComponent } from "@uniformdev/canvas-react";

import Hero from "./Hero";
import Routine from "./Routine";

const mappings = {
  hero: Hero,
  routine: Routine,
};

export function resolveRenderer(component) {
  const componentImpl = mappings[component.type];
  return componentImpl ? componentImpl : DefaultNotImplementedComponent;
}

export default mappings;
