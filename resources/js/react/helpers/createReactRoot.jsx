import React from "react";
import {createRoot} from "react-dom/client";

const createReactRoot = (placeId, renderComponent) => {
  const root = createRoot(document.getElementById(placeId))

  root.render(<React.StrictMode>
    <renderComponent />
  </React.StrictMode>)
}

export {
  createReactRoot
}