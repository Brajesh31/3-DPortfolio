import React from 'react';
import { createSafeContext } from './SafeContextProvider';

// If React Spring is trying to use createContext, we'll provide a safe version
// This may be used by @react-spring/three internally

// Create safe context for Spring animations
export const SpringContext = createSafeContext({
  // Default values that would typically be in a Spring context
  tension: 170,
  friction: 26,
  mass: 1,
  immediate: false,
  // Add any other context values used by React Spring
});

// Safe Spring Provider component
export const SafeSpringProvider = ({ children, value }) => {
  // Only render the Provider if it's available
  if (
    typeof React !== 'undefined' && 
    React !== null && 
    SpringContext && 
    SpringContext.Provider
  ) {
    return (
      <SpringContext.Provider value={value || {}}>
        {children}
      </SpringContext.Provider>
    );
  }
  
  // Otherwise just render the children
  return children;
}; 