import { DefaultNotImplementedComponent } from "@uniformdev/canvas-react";

import Hero from "./Hero";
import Routine from "./Routine";
import ProductHighlight from "./ProductHighlight";
import Editorial from "./Editorial";
import Cta from "./Cta";
import ProductCard from "./ProductCard";
import ProductDetail from "./ProductDetail";
import Tutorial from "./Tutorial";
import ProductList from "./ProductList";

import DynamicProductDetail from "./dynamicpdp/dynamicProductDetail";
import DynamicTutorial from "./dynamicpdp/dynamicTutorial";
import DynamicRoutine from "./dynamicpdp/dynamicRoutine";

const mappings = {
  hero: Hero,
  routine: Routine,
  productHighlight: ProductHighlight,
  editorial: Editorial,
  cta: Cta,
  productCard: ProductCard,
  productDetail: ProductDetail,
  tutorial: Tutorial,
  productList: ProductList,
  dynamicProductDetail: DynamicProductDetail,
  dynamicTutorial: DynamicTutorial,
  dynamicRoutine: DynamicRoutine,
};

export function resolveRenderer(component) {
  const componentImpl = mappings[component.type];
  return componentImpl ? componentImpl : DefaultNotImplementedComponent;
}

export default mappings;
