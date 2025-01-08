import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const newsletter = {
  addToNewsletter: defineAction({
    accept: "form",
    input: z.object({
      email: z.string().email(),
    }),
    handler: async ({ email }) => {
      const action = "https://buttondown.com/api/emails/embed-subscribe/pc";
      const method = "post";
      try {
        const response = await fetch(action, {
          method: method,
          body: JSON.stringify({ email }),
        });
        if (response) {
          return { success: true };
        }
      } catch (error) {
        console.error("Error signing up for Refil:", error);
      }
    },
  }),
};
