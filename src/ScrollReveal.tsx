import { FC } from "react";
import { htmlElements } from "./supported-elements";
import { AnimationComponent } from "./AnimationComponent";
import { HTMLElements, IScrollReveal } from "./types";

/**
 * Replace this component with your regular html tags
 * @example <ScrollReveal.p 
 *  animation="slide-in-bottom"
 * >
 * Hello World
 * </ScrollReveal.p>
 */
export const ScrollReveal = Object.fromEntries(
  htmlElements.map((element) => [element, AnimationComponent(element)]),
) as { [k in HTMLElements]: FC<IScrollReveal> };
