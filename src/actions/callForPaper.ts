import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { put } from "@vercel/blob";

export const callForPaper = {
  submit: defineAction({
    accept: "form",
    input: z.object({
      title: z
        .string()
        .trim()
        .min(2, "Give your talk a title with at least a couple of letters.")
        .max(120),
      description: z
        .string()
        .trim()
        .min(1, "Tell us what the talk is about.")
        .max(2000),
      presenter: z
        .string()
        .trim()
        .min(2, "Let us know who's presenting.")
        .max(80),
    }),
    handler: async ({ title, description, presenter }, context) => {
      const submission = {
        title,
        description,
        presenter,
        timestamp: new Date().toISOString(),
      };

      // Vercel refreshes the OIDC token per-request and delivers it via this
      // header; import.meta.env.VERCEL_OIDC_TOKEN is only a build-time snapshot.
      const oidcToken =
        context.request.headers.get("x-vercel-oidc-token") ??
        import.meta.env.VERCEL_OIDC_TOKEN;

      const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .slice(0, 60);

      await put(
        `call-for-papers/${Date.now()}-${slug}.json`,
        JSON.stringify(submission),
        {
          access: "private",
          contentType: "application/json",
          addRandomSuffix: false,
          oidcToken,
          storeId: import.meta.env.BLOB_STORE_ID,
        },
      );

      return { success: true as const, title };
    },
  }),
};
