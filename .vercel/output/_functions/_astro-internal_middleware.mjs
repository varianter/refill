import 'es-module-lexer';
import './chunks/astro-designed-error-pages_u2PqS4jj.mjs';
import 'cookie';
import { d as defineMiddleware, s as sequence } from './chunks/index__w4LRhe9.mjs';
import { g as getActionContext } from './chunks/server_DtyWN8FK.mjs';

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
