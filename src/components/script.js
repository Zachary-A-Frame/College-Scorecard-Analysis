import { useEffect } from "react";

// let resourceUrl = "https://unpkg.com/react-plotly.js@1.0.2/dist/create-plotly-component.js"

const importScript = (resourceUrl) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = resourceUrl;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [resourceUrl]);
};

export default importScript;
