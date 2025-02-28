import { fetchAPI, FetchAPIOptions } from "@/lib/fetchAPI";
import { STRAPI_BASE_URL } from "./constants";
import {
  BLOG_ARTICLES,
  BLOG_HOME_PAGE,
  HOME_PAGE_DATA_QUERY,
  PROJECT_PAGE_DATA_QUERY,
  SINGLE_BLOG_ARTICLE,
} from "./queries";

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

export const getBlogHomePageData = async () => {
  const path = "/api/blog-home-page";
  const url = new URL(path, STRAPI_BASE_URL);
  url.search = BLOG_HOME_PAGE;

  const request: FetchAPIOptions = {
    method: "GET",
  };

  return await fetchAPI(url.href, request);
};

export const getBlogArticlesData = async () => {
  const path = "/api/blog-pages";
  const url = new URL(path, STRAPI_BASE_URL);
  url.search = BLOG_ARTICLES;

  const request: FetchAPIOptions = {
    method: "GET",
  };

  return await fetchAPI(url.href, request);
};

export const getSingleBlogData = async (slug: string) => {
  const path = "/api/blog-pages";
  const url = new URL(path, STRAPI_BASE_URL);
  url.search = SINGLE_BLOG_ARTICLE(slug);

  const request: FetchAPIOptions = {
    method: "GET",
  };

  return await fetchAPI(url.href, request);
};
