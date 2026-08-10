import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { put } from "@vercel/blob";

export const registration = {
  register: defineAction({
    accept: "form",
    input: z
      .object({
        name: z
          .string()
          .trim()
          .min(2, "A name needs at least two letters to cause any friction.")
          .max(80),
        email: z
          .string()
          .trim()
          .email(
            "That doesn't look like a real email — typos are the wrong kind of friction.",
          ),
        dietary: z
          .string()
          .trim()
          .min(
            1,
            "Even 'I'll eat anything' is a valid answer — but you have to write something.",
          )
          .max(300),
        attendingDayProgram: z
          .union([z.literal("on"), z.undefined()])
          .optional(),
        attendingDinner: z.union([z.literal("on"), z.undefined()]).optional(),
        attendingSocial: z.union([z.literal("on"), z.undefined()]).optional(),
        frictionDisabled: z.union([z.literal("on"), z.undefined()]).optional(),
        confirm1: z.union([z.literal("on"), z.undefined()]).optional(),
        confirm2: z.union([z.literal("on"), z.undefined()]).optional(),
        confirm3: z.union([z.literal("on"), z.undefined()]).optional(),
        confirm4: z.union([z.literal("on"), z.undefined()]).optional(),
        confirm5: z.union([z.literal("on"), z.undefined()]).optional(),
      })
      .refine((data) => data.frictionDisabled !== "on", {
        message:
          "Friction should not be avoided but celebrated. Please leave that box unchecked.",
        path: ["frictionDisabled"],
      })
      .refine((data) => data.confirm1 === "on", {
        message: "You have to confirm before we can register you.",
        path: ["confirm1"],
      })
      .refine((data) => data.confirm2 === "on", {
        message: "We did ask if you were sure.",
        path: ["confirm2"],
      })
      .refine((data) => data.confirm3 === "on", {
        message: "Really sure. As in, really.",
        path: ["confirm3"],
      })
      .refine((data) => data.confirm4 === "on", {
        message:
          "Last one, we promise — check it and we'll stop asking.",
        path: ["confirm4"],
      })
      .refine((data) => data.confirm5 === "on", {
        message: "We lied about that being the last one. This is the last one.",
        path: ["confirm5"],
      }),
    handler: async (
      {
        name,
        email,
        dietary,
        attendingDayProgram,
        attendingDinner,
        attendingSocial,
      },
      context,
    ) => {
      const submission = {
        name,
        email,
        dietary,
        attendingDayProgram: attendingDayProgram === "on",
        attendingDinner: attendingDinner === "on",
        attendingSocial: attendingSocial === "on",
        timestamp: new Date().toISOString(),
      };

      // Vercel refreshes the OIDC token per-request and delivers it via this
      // header; import.meta.env.VERCEL_OIDC_TOKEN is only a build-time snapshot.
      const oidcToken =
        context.request.headers.get("x-vercel-oidc-token") ??
        import.meta.env.VERCEL_OIDC_TOKEN;

      await put(
        `registrations/${Date.now()}-${crypto.randomUUID()}.json`,
        JSON.stringify(submission),
        {
          access: "private",
          contentType: "application/json",
          addRandomSuffix: false,
          oidcToken,
          storeId: import.meta.env.BLOB_STORE_ID,
        },
      );

      return { success: true as const, name };
    },
  }),
};
