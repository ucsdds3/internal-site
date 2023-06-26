import { fail, redirect } from "@sveltejs/kit";
import { auth } from "$server/lucia";
import type { Actions, PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals }) => {
    const session = await locals.auth.validate()
    if (session) {
        throw redirect(302, "/dashboard")
    }
}

export const actions: Actions = {
    register: async ({ request, locals }) => {
        // Pull register info from form
        const { emailInput, passwordInput } = Object.fromEntries(
            await request.formData()
        ) as Record<string, string>
        const name = emailInput.match(/^(.+)@/)![1];

        // Register user to DB
        try {
            const user = await auth.createUser({
                primaryKey: {
                    providerId: 'email',
                    providerUserId: emailInput,
                    password: passwordInput
                },
                attributes: {
                    name: name,
                    email: emailInput,
                    staff: false,
                    subcom: "",
                }
            })
            const session = await auth.createSession(user.userId);
            locals.auth.setSession(session);
            
            // Move users to dashboard
            throw redirect(302, "/dashboard")
        } catch (err) {
            // Error
            console.log(err)
            return fail(400, {
                message: "Error registering user."
            })
        }
    }
}