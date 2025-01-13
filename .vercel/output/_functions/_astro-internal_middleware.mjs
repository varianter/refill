import 'es-module-lexer';
import './chunks/astro-designed-error-pages_DPwSjLdE.mjs';
import 'cookie';
import { d as defineMiddleware, s as sequence } from './chunks/index_Dmfv0oXe.mjs';
import { g as getActionContext } from './chunks/server_BL6-8W1f.mjs';

const onRequest$1 = defineMiddleware(async (context, next) => {
  if (context.isPrerendered) return next();
  const { action, setActionResult, serializeActionResult } = getActionContext(context);
  if (action?.calledFrom === "form") {
    const actionResult = await action.handler();
    setActionResult(action.name, serializeActionResult(actionResult));
  }
  return next();
});

const onRequest = sequence(
	
	
	onRequest$1
);

export { onRequest };
