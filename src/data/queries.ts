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
