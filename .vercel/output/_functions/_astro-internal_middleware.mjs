import 'es-module-lexer';
import './chunks/astro-designed-error-pages_CcXaPcGG.mjs';
import 'cookie';
import { d as defineMiddleware, s as sequence } from './chunks/index_DJU6xkSA.mjs';
import { g as getActionContext } from './chunks/server_BwsbYiw0.mjs';

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
