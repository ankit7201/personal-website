import qs from "qs";

export const HOME_PAGE_DATA_QUERY = qs.stringify({
  populate: {
    fields: ["name", "description"],
    contact: {
      fields: ["email"],
      populate: {
        resume: {
          fields: ["url"],
        },
        social: {
          fields: ["href"],
          populate: {
            name: {
              fields: ["url"],
            },
          },
        },
      },
    },
    infoCard: {
      fields: ["title", "description", "href"],
    },
  },
});

export const PROJECT_PAGE_DATA_QUERY = qs.stringify({
  populate: {
    fields: ["title", "description"],
    projectCards: {
      fields: ["title", "description", "tags"],
      populate: {
        link: {
          fields: ["text", "href"],
          populate: {
            image: {
              fields: ["url"],
            },
          },
        },
      },
    },
  },
});

export const BLOG_HOME_PAGE = qs.stringify({
  fields: ["heading", "description"],
});

export const BLOG_ARTICLES = qs.stringify({
  fields: ["title", "description", "publishedDate", "readingTime", "slug"],
});

export const SINGLE_BLOG_ARTICLE = (slug: string) => {
  return qs.stringify({
    filters: {
      slug: {
        $eq: slug,
      },
    },
  });
};
