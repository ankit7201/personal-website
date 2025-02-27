import { fetchAPI, FetchAPIOptions } from "@/lib/fetchAPI";
import { STRAPI_BASE_URL } from "./constants";
import { HOME_PAGE_DATA_QUERY, PROJECT_PAGE_DATA_QUERY } from "./queries";

export const getHomePageData = async () => {
  const path = "/api/home-page";
  const url = new URL(path, STRAPI_BASE_URL);
  url.search = HOME_PAGE_DATA_QUERY;

  const request: FetchAPIOptions = {
    method: "GET",
  };

  return await fetchAPI(url.href, request);
};

export const getProjectPageData = async () => {
  const path = "/api/project-page";
  const url = new URL(path, STRAPI_BASE_URL);
  url.search = PROJECT_PAGE_DATA_QUERY;

  const request: FetchAPIOptions = {
    method: "GET",
  };

  return await fetchAPI(url.href, request);
};
