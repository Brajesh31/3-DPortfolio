// Safe imports to handle SSR
let useLayoutEffect, useEffect;

// Check if we're in a browser environment
const isBrowser = typeof window !== 'undefined';

try {
  // Dynamic import for React hooks
  const React = require('react');
  
  if (React && typeof React !== 'undefined') {
    useLayoutEffect = React.useLayoutEffect;
    useEffect = React.useEffect;
  } else {
    // Fallback if React is not available
    useLayoutEffect = function() {};
    useEffect = function() {};
  }
} catch (error) {
  console.error('Error importing React:', error);
  // Provide dummy implementations if React can't be imported
  useLayoutEffect = function() {};
  useEffect = function() {};
}

// Use useLayoutEffect on client, useEffect on server to avoid warnings
const useIsomorphicLayoutEffect = isBrowser && useLayoutEffect 
  ? useLayoutEffect 
  : useEffect || function() {};

export default useIsomorphicLayoutEffect; 