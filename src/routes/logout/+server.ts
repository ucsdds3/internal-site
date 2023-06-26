import { fail, redirect } from "@sveltejs/kit";
import { auth } from "$lib/server/lucia";
import type { RequestHandler } from './$types'


export const POST: RequestHandler = async ({ locals }) => {
    // Return user to login if already signed out
    const { session } = await locals.auth.validateUser();
    if (!session) {
        throw redirect(302, "/")
    }

    // Remove sessions from user's browser
    await auth.invalidateSession(session.sessionId); 
    locals.auth.setSession(null); 

    throw redirect(302, "/")
}