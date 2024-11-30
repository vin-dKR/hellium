"use client";
import { useEffect } from "react";

const ChatbotEmbed = ({
  domainId,
  baseUrl = "https://hellium.vercel.app",
  position = { bottom: "50px", right: "50px" }
}) => {
  useEffect(() => {
    // console.log('Current baseUrl:', baseUrl);
    const iframe = document.createElement("iframe");

    // Apply inline styles with configurable position
    iframe.style.position = "fixed";
    iframe.style.bottom = position.bottom;
    iframe.style.right = position.right;
    iframe.style.border = "none";
    iframe.style.zIndex = "9999"; // Ensure iframe stays on top

    // Use environment-based URL
    iframe.src = `${baseUrl}/chatbot`;

    // Append iframe to the document body
    document.body.appendChild(iframe);

    const handleMessage = (e) => {
      const allowedOrigins = [
        baseUrl,
        // "http://localhost:3000"
      ];
      
      if (!allowedOrigins.some(origin => e.origin.startsWith(origin))) {
        console.warn('Received message from unauthorized origin:', e.origin);
        return;
      }

      // console.log("Received message:", e.data);

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

      iframe.contentWindow.postMessage(
        domainId,
        baseUrl
      );
    };

    window.addEventListener("message", handleMessage);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("message", handleMessage);
      document.body.removeChild(iframe);
    };
  }, [domainId, baseUrl, position]);

  return null;
};

export default ChatbotEmbed;
