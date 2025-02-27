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
