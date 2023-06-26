import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
	const { session, user } = await locals.auth.validateUser();
    console.log(session)
    console.log(user)
	if (!user) throw redirect(302, "/");
	return {
		user
	};
};
