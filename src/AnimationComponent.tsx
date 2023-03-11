import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HTMLElements, IScrollReveal } from "./types";
import { ConfigFactory } from "./ConfigFactory";

/**
 * This component wraps a motion element
 * @param htmlTag The html element to be used
 * @returns Scroll reveal react component
 */
export const AnimationComponent =
  (htmlTag: HTMLElements) => (props: IScrollReveal) => {
    const MotionElement = motion[htmlTag];
    const controls = useAnimation();
    const config = ConfigFactory.create(props);
    const [ref, inView] = useInView({ threshold: config.threshold });

    useEffect(() => {
      if (inView) controls.start("visible");
    }, [controls, inView]);

    return (
      <MotionElement
        ref={ref}
        animate={controls}
        initial="hidden"
        style={props.style}
        variants={config.variants}
        className={props.className}
      >
        {props.children}
      </MotionElement>
    );
  };
