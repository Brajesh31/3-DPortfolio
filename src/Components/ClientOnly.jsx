import { useEffect, useState } from 'react';

// Component that only renders its children when in the browser
// Used to prevent hydration errors with components that use browser-only APIs
export default function ClientOnly({ children, fallback = null }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return fallback;
  }

  return children;
} 