import { useEffect } from "react";

interface SeoConfig {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: object;
}

function setMeta(selector: string, attribute: "content" | "href", value?: string) {
  const element = document.head.querySelector(selector);
  if (!element) {
    return;
  }

  if (value) {
    element.setAttribute(attribute, value);
  } else {
    element.removeAttribute(attribute);
  }
}

function upsertMeta(property: string, content?: string) {
  const attr = property.startsWith("og:") ? "property" : "name";
  let element = document.head.querySelector(`meta[${attr}="${property}"]`);

  if (!content) {
    element?.remove();
    return;
  }

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, property);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

export function useSEO(config: SeoConfig) {
  useEffect(() => {
    document.title = config.title;
    setMeta('meta[name="description"]', "content", config.description);
    upsertMeta("og:title", config.title);
    upsertMeta("og:description", config.description);
    upsertMeta("twitter:title", config.title);
    upsertMeta("twitter:description", config.description);
    upsertMeta("og:image", config.ogImage);
    upsertMeta("twitter:image", config.ogImage);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (config.canonical) {
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", config.canonical);
    } else {
      canonical?.remove();
    }

    const existingData = document.getElementById("structured-data");
    existingData?.remove();
    if (config.structuredData) {
      const script = document.createElement("script");
      script.id = "structured-data";
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(config.structuredData);
      document.head.appendChild(script);
    }
  }, [config]);
}
