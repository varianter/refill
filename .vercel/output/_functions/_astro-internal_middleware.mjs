import 'es-module-lexer';
import './chunks/astro-designed-error-pages_4x2vINuE.mjs';
import 'cookie';
import { d as defineMiddleware, s as sequence } from './chunks/index_CGib1MW2.mjs';
import { g as getActionContext } from './chunks/server_DF5mcen_.mjs';

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
