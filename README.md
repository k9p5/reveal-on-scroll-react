# React Scroll Reveal

Add scroll animations to your React application super fast!

> This library is based on framer-motion and react-intersection-observer. Many thanks to their contributions!

## Installation
```
npm i --save reveal-on-scroll-react
```

## Getting Started
IDEA: Simply replace the scroll reveal components with your existing HTML tags.

But first you need to import the library:
```
import { ScrollReveal } from "reveal-on-scroll-react";
```

Now you can start replacing your tags. Let's consider the following example:
```
function HelloWorld() {
    return (
        <div className="center">
            <h1 className="color-blue">Hello World</h1>
        </div>
    )
}
```
This allows us to add a fade in and slide animation like so:
```
function HelloWorld() {
    return (
        <ScrollReveal.div className="center"> 
            <ScrollReveal.h1 animation="slide-in-bottom" className="color-blue">Hello World</ScrollReveal.h1>
        </ScrollReveal.div>
    )
}
```
Notice: If no animation has been specified, the default animation is "fade-in" meaning the animation property is not required.

Currently there are 4 different types of animations `"fade-in" | "slide-in-bottom" | "slide-in-right" | "slide-in-left"`

### Properties

| Property  | Default Value | Description |
| --------- | ------------- | ----------- |
| animation  | "fade-in" | The animation preset |
| threshold  | 0.5 | Configure the viewport threshold 0 - 1 |
| duration | 1 | Duration of the animation in seconds |
| easing | "easeOut" | Easing function |
| delay | 0 | Delay the animation |
| value | - | Offset before the animation has started |
