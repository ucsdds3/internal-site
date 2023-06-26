import { fail, redirect } from "@sveltejs/kit";
import { auth } from "$lib/server/lucia";
import type { PageServerLoad, Actions } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
    const { session } = await locals.auth.validateUser();
    if (session) {
        throw redirect(302, "/dashboard")
    }
    return {}
}

export const actions: Actions = {
    login: async ({ request, locals }) => {
        // Pull login info from submit form
        const { email, password } = Object.fromEntries(
            await request.formData()
        ) as Record<string, string>

        // Authenticating user
        try {
            const key = await auth.useKey("email", email, password)
            const session = await auth.createSession(key.userId);
			
            locals.auth.setSession(session);

            throw redirect(302, "/dashboard")
        } catch (err) {
            console.log(err)
            return fail(400, {
                message: "Incorrect Username/Password"
            })
        }
    }
}