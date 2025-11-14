import React from "react";
import {createRoot} from "react-dom/client";

const createReactRoot = (placeId, RenderComponent) => {
  const root = createRoot(document.getElementById(placeId))

  root.render(<React.StrictMode>
    <RenderComponent />
  </React.StrictMode>)
}

export {
  createReactRoot
}