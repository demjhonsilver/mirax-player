//index.js - This is your package's entry point

// Import the VideoPlayer class
import Mirax from './dist/VideoPlayer';
import { attach } from './dist/connector';

// Export the VideoPlayer class and attach function
export default Mirax;

export { attach };

// Re-export the function as both default and named export
export { default as progressColor } from './dist/progressColor';
export { default as progressFrame } from './dist/progressFrame';







