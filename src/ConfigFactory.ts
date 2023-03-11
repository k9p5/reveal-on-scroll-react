import { Variants } from "framer-motion";
import { IScrollReveal, IConfig } from "./types";

/**
 * Create a confguration based on the provided animation
 */
export class ConfigFactory {
    static create(props: IScrollReveal) {
        if (props?.animation == "fade-in") {
            return new FadeInConfig(props);
        }
        if (props?.animation == "slide-in-bottom") {
            return new SlideInBottom(props);
        }
        if (props?.animation == "slide-in-right") {
            return new SlideInRight(props);
        }
        if (props.animation == "slide-in-left") {
            return new SlideInLeft(props);
        }
        return new FadeInConfig(props);
    }
}


class FadeInConfig implements IConfig {
    public threshold: number;
    public variants: Variants;

    public constructor(props: IScrollReveal) {
        this.threshold = props.threshold ?? 0.5;
        this.variants = {
            visible: {
                opacity: 1,
                transition: {
                    duration: props.duration ?? 1,
                    ease: props.easing ?? "easeOut",
                    delay: props.delay ?? 0,
                },
            },
            hidden: { opacity: props.value ?? 0 },
        };
    }
}

class SlideInBottom implements IConfig {
    public threshold: number;
    public variants: Variants;

    public constructor(props: IScrollReveal) {
        this.threshold = props.threshold ?? 0.5;
        this.variants = {
            visible: {
                y: 0,
                transition: {
                    duration: props.duration ?? 1,
                    ease: props.easing ?? "easeOut",
                    delay: props.delay ?? 0,
                },
            },
            hidden: { y: props.value ?? 100 },
        };
    }
}

class SlideInRight implements IConfig {
    public threshold: number;
    public variants: Variants;

    public constructor(props: IScrollReveal) {
        this.threshold = props.threshold ?? 0.5;
        this.variants = {
            visible: {
                x: 0,
                transition: {
                    duration: props.duration ?? 1,
                    ease: props.easing ?? "easeOut",
                    delay: props.delay ?? 0,
                },
            },
            hidden: { x: props.value ?? 100 },
        };
    }
}

class SlideInLeft implements IConfig {
    public threshold: number;
    public variants: Variants;

    public constructor(props: IScrollReveal) {
        this.threshold = props.threshold ?? 0.5;
        this.variants = {
            visible: {
                x: 0,
                transition: {
                    duration: props.duration ?? 1,
                    ease: props.easing ?? "easeOut",
                    delay: props.delay ?? 0,
                },
            },
            hidden: { x: props.value ?? -100 },
        };
    }
}

