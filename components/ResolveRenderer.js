import { DefaultNotImplementedComponent } from "@uniformdev/canvas-react";

import Hero from "./Hero";

const mappings = {
  hero: Hero,
};

export function resolveRenderer(component) {
  const componentImpl = mappings[component.type];
  return componentImpl ? componentImpl : DefaultNotImplementedComponent;
}

export default mappings;
