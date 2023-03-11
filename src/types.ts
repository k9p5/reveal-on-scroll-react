import { ReactNode, CSSProperties } from "react";
import { Variants, Easing } from "framer-motion";
import { htmlElements } from "./supported-elements";

type UnionStringArray<T extends Readonly<string[]>> = T[number]

/**
 * Defines the animation preset
 */
export type Animation =
    | "fade-in"
    | "slide-in-bottom"
    | "slide-in-right"
    | "slide-in-left";

/**
 * Defines the supported html tags
 */
export type HTMLElements = UnionStringArray<typeof htmlElements>

export interface IConfig {
    threshold: number;
    variants: Variants;
}

/**
 * Defines the properties of the animation component
 */
export interface IScrollReveal {
    children: ReactNode;
    /**
     * Specify the animation preset  
     * default: "fade-in"
     */
    animation?: Animation;
    style?: CSSProperties;
    className?: string;
    /**
     * Configure the viewport threshold, i.e. how much a user has
     * to scroll into the view so that the animation gets triggert.
     * This is a value between 0 and 1. Whereas 0 triggers the animation
     * instantly.  
     * default: 0.5
     */
    threshold?: number;
    /**
     * How long should the animation take
     */
    duration?: number;
    /**
     * Change the easing function  
     * default: "easeOut"
     */
    easing?: Easing;
    /**
     * Configure whether the animation should be
     * triggered after a delay  
     * default: 0
     */
    delay?: number;
    /**
     * Change the initial value of the animation. E.g.
     * you can increse the offset of a slide in animation, which is
     * 100 or -100 in this case.
     */
    value?: number;
}