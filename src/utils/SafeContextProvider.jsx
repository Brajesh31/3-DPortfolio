import React from 'react';

// Function to safely create a React context that works in both SSR and client environments
export function createSafeContext(defaultValue) {
  // Check if React is available and has createContext
  if (
    typeof React !== 'undefined' && 
    React !== null && 
    typeof React.createContext === 'function'
  ) {
    try {
      return React.createContext(defaultValue);
    } catch (error) {
      console.error('Error creating React context:', error);
      return createMockContext(defaultValue);
    }
  }
  
  // Fallback to a mock context if React.createContext is unavailable
  return createMockContext(defaultValue);
}

// Create a mock context implementation that won't crash in SSR
function createMockContext(defaultValue) {
  // Return an object with Provider and Consumer that don't crash
  return {
    Provider: ({ children }) => children,
    Consumer: ({ children }) => children(defaultValue),
    displayName: 'MockContext',
    // Add this so useContext works with our mock
    _currentValue: defaultValue
  };
}

// A safe version of useContext
export function useSafeContext(Context, fallbackValue) {
  // Check if React and useContext are available
  if (
    typeof React !== 'undefined' && 
    React !== null && 
    typeof React.useContext === 'function'
  ) {
    try {
      return React.useContext(Context);
    } catch (error) {
      console.error('Error using React context:', error);
      return fallbackValue;
    }
  }
  
  // Fallback value if useContext is unavailable
  return fallbackValue;
} 