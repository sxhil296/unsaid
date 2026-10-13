import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Unsaid – Share the Words You Couldn't Say",
    short_name: "Unsaid",
    description:
      "A safe space to share the messages you never got to send. Write your unspoken thoughts anonymously and let your silence be heard.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffedd6",
    theme_color: "#ff7a05",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
