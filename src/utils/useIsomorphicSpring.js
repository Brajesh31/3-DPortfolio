// Safe imports to handle SSR
let useSpring;

// Check if we're in a browser environment
const isBrowser = typeof window !== 'undefined';

// Only import react-spring if we're in a browser
if (isBrowser) {
  try {
    // Dynamic import for SSR safety
    const reactSpring = require('@react-spring/three');
    useSpring = reactSpring.useSpring;
  } catch (error) {
    console.error('Error importing @react-spring/three:', error);
    // Provide a fallback implementation
    useSpring = (props) => ({
      lightIntensity: 0,
      scale: 1,
      // Add other defaults as needed
    });
  }
} else {
  // Provide a fallback for SSR
  useSpring = (props) => ({
    lightIntensity: 0,
    scale: 1,
    // Add other defaults as needed
  });
}

// Custom hook to handle useSpring safely
const useIsomorphicSpring = (props) => {
  // Make sure we're in browser environment
  if (!isBrowser) {
    // Return a default object with the expected properties
    return {
      lightIntensity: 0,
      scale: 1,
      // Add other default values as needed
    };
  }

  // Client-side: use normal useSpring if available
  if (useSpring) {
    try {
      return useSpring(props);
    } catch (error) {
      console.error('Error using useSpring:', error);
      return {
        lightIntensity: 0,
        scale: 1,
        // Add other default values as needed
      };
    }
  }

  // Fallback if useSpring is unavailable
  return {
    lightIntensity: 0,
    scale: 1,
    // Add other default values as needed
  };
};

export default useIsomorphicSpring; 