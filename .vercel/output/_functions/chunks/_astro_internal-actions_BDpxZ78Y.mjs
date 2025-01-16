import { g as getActionQueryString } from './astro-designed-error-pages_u2PqS4jj.mjs';
import 'es-module-lexer';
import 'kleur/colors';
import './astro/server_CdEH2Y-f.mjs';
import 'clsx';
import 'cookie';
import * as z from 'zod';
import { d as defineAction } from './server_DtyWN8FK.mjs';

const ENCODED_DOT = "%2E";
function toActionProxy(actionCallback = {}, aggregatedPath = "") {
  return new Proxy(actionCallback, {
    get(target, objKey) {
      if (objKey in target || typeof objKey === "symbol") {
        return target[objKey];
      }
      const path = aggregatedPath + encodeURIComponent(objKey.toString()).replaceAll(".", ENCODED_DOT);
      function action(param) {
        return handleAction(param, path, this);
      }
      Object.assign(action, {
        queryString: getActionQueryString(path),
        toString: () => action.queryString,
        // Progressive enhancement info for React.
        $$FORM_ACTION: function() {
          const searchParams = new URLSearchParams(action.toString());
          return {
            method: "POST",
            // `name` creates a hidden input.
            // It's unused by Astro, but we can't turn this off.
            // At least use a name that won't conflict with a user's formData.
            name: "_astroAction",
            action: "?" + searchParams.toString()
          };
        },
        // Note: `orThrow` does not have progressive enhancement info.
        // If you want to throw exceptions,
        //  you must handle those exceptions with client JS.
        async orThrow(param) {
          const { data, error } = await handleAction(param, path, this);
          if (error) throw error;
          return data;
        }
      });
      return toActionProxy(action, path + ".");
    }
  });
}
async function handleAction(param, path, context) {
  {
    const { getAction } = await import('./server_DtyWN8FK.mjs').then(n => n.a);
    const action = await getAction(path);
    if (!action) throw new Error(`Action not found: ${path}`);
    return action.bind(context)(param);
  }
}
toActionProxy();

const newsletter = {
  addToNewsletter: defineAction({
    accept: "form",
    input: z.object({
      email: z.string().email()
    }),
    handler: async ({ email }) => {
      const action = "https://buttondown.com/api/emails/embed-subscribe/pc";
      const method = "post";
      try {
        const response = await fetch(action, {
          method,
          body: JSON.stringify({ email })
        });
        if (response) {
          return { success: true };
        }
      } catch (error) {
        console.error("Error signing up for Refil:", error);
      }
    }
  })
};

const server = {
  newsletter
};

export { server };
