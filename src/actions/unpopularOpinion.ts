import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { put } from "@vercel/blob";

export const unpopularOpinion = {
  submit: defineAction({
    accept: "form",
    input: z.object({
      opinion: z
        .string()
        .trim()
        .min(2, "Share an opinion with at least a couple of letters.")
        .max(500),
    }),
    handler: async ({ opinion }, context) => {
      const submission = {
        opinion,
        timestamp: new Date().toISOString(),
      };

      // Vercel refreshes the OIDC token per-request and delivers it via this
      // header; import.meta.env.VERCEL_OIDC_TOKEN is only a build-time snapshot.
      const oidcToken =
        context.request.headers.get("x-vercel-oidc-token") ??
        import.meta.env.VERCEL_OIDC_TOKEN;

      await put(
        `unpopular-opinions/${Date.now()}-${crypto.randomUUID()}.json`,
        JSON.stringify(submission),
        {
          access: "private",
          contentType: "application/json",
          addRandomSuffix: false,
          oidcToken,
          storeId: import.meta.env.BLOB_STORE_ID,
        },
      );

      return { success: true as const };
    },
  }),
};
