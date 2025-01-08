import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const newsletter = {
  addToNewsletter: defineAction({
    accept: "form",
    input: z.object({
      email: z.string().email(),
    }),
    handler: async ({ email }) => {
      // call a mailing service, or store to a database
      return { success: true };
    },
  }),
};
