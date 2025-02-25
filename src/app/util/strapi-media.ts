import { STRAPI_BASE_URL } from "@/data/constants";

export function getStrapiMedia(url: string) {
  if (url == null) return null;
  if (url.startsWith("data:")) return url;
  if (url.startsWith("http")) return url;
  return STRAPI_BASE_URL + url;
}
