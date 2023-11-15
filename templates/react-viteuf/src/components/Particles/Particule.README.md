
1. The `Particle` component:
- Takes a `size` prop to set dimensions for shapes.
- Uses `useState` to store randomized position and shape.
- Uses `useEffect` to update position and shape whenever the size changes.
- Defines a function named `getShape()` that returns an appropriate JSX element based on the current shape value (0 - circle, 1 - square, 2 - triangle).
- Renders a positioned div containing the selected shape.

2. The `Particule` component:
- Uses `useState` to store an array of particle elements.
- Defines a function named `createParticles()` that creates 100 instances of the `Particle` component with randomized sizes and stores them in state.
- Uses `useEffect` to call `createParticles()` initially when the component mounts.
- Renders all particles as children.