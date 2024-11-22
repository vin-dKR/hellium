"use client";
import { useEffect } from "react";

const ChatbotEmbed = () => {
  useEffect(() => {
    // Create the iframe
    const iframe = document.createElement("iframe");

    // Apply inline styles
    iframe.style.position = "fixed";
    iframe.style.bottom = "50px";
    iframe.style.right = "50px";
    iframe.style.border = "none";
    
    // Set iframe source
    iframe.src = "http://localhost:3000/chatbot";

    // Append iframe to the document body
    document.body.appendChild(iframe);

    const handleMessage = (e) => {
      if (e.origin !== "http://localhost:3000") return;

      console.log("Received message:", e.data); // Debugging

      let dimensions;
      try {
        // If e.data is a JSON string, parse it
        dimensions = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
      } catch (error) {
        console.error("Failed to parse message:", error);
        return;
      }

      if (dimensions?.width && dimensions?.height) {
        iframe.width = dimensions.width;
        iframe.height = dimensions.height;
      }

      // Post back the unique identifier to the iframe
      iframe.contentWindow.postMessage(
        "b2ef15db-d57d-486c-bcca-bce201f7f364",
        "http://localhost:3000/"
      );
    };

    window.addEventListener("message", handleMessage);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("message", handleMessage);
      document.body.removeChild(iframe);
    };
  }, []);

  return null; // This component doesn't render anything in JSX
};

export default ChatbotEmbed;
