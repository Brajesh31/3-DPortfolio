import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Defensive check for React and ReactDOM
const isReactAvailable = typeof React !== 'undefined' && React !== null;
const isReactDOMAvailable = typeof ReactDOM !== 'undefined' && ReactDOM !== null;
const isDocumentAvailable = typeof document !== 'undefined' && document !== null;

// Only attempt to render if all dependencies are available
if (isReactAvailable && isReactDOMAvailable && isDocumentAvailable) {
  try {
    const rootElement = document.getElementById("root");

    if (rootElement) {
      const root = ReactDOM.createRoot(rootElement);

      root.render(
        <HashRouter>
          <App />
        </HashRouter>
      );
    } else {
      console.error("Root element not found in the document");
    }
  } catch (error) {
    console.error("Error rendering React application:", error);
  }
} else {
  console.warn("React, ReactDOM, or document is not available. Skipping client-side rendering.");
}
