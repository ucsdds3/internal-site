import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
	// Return to login if no session
	const { user } = await locals.auth.validateUser();
	if (!user) throw redirect(302, "/");

	// Sending client user data
	return {
		user
	};
};
