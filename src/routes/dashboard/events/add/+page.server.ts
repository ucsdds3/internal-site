import { fail, redirect } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";
import type { Event } from "$lib/server/interfaces"

export const load: PageServerLoad = async ({ locals }) => {
    const { user } = await locals.auth.validateUser()
    if (!user) {throw redirect(302, "/")}

    

}

export const actions: Actions = {
    addEvent: async ({ request, locals }) => {
        // Pull event info from form
        const {
            title,
            date,
            time,
            description,
            image,
            location,
            presenters,
            registrationLink
        } = Object.fromEntries(
            await request.formData()
        ) as Record<string, string>

        // console.log({
        //     title,
        //     date,
        //     time,
        //     description,
        //     image,
        //     location,
        //     presenters,
        //     registrationLink
        // })
        
        // Create event in DB
        try {
            // await prisma.event.create({
            //     data: {
            //         ...
            //     }
            // })
        } catch (err) {
            console.log(err)
            fail(500, {message: "Something went wrong"})
        }

    }
}