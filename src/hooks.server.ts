import { auth } from "./lib/server/lucia";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	event.setHeaders({ 'Cache-Control': 'no-store' });
	event.locals.auth = auth.handleRequest(event);
	return await resolve(event);
};