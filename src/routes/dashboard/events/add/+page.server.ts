import { fail, redirect } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";
import type { Event } from "$lib/server/interfaces"
import { prisma } from "$lib/server/prisma";
import { NotFoundError } from "@prisma/client/runtime";

export const load: PageServerLoad = async ({ locals }) => {
    const { user } = await locals.auth.validateUser()
    if (!user) {throw redirect(302, "/")}

    

}

export const actions: Actions = {
    addEvent: async ({ request, locals }) => {
        const { user } = await locals.auth.validateUser()
        if (!user) {throw redirect(302, "/")}


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
        let eventDatetime = new Date(`${date} ${time}`)    
        
        // // Create event and update users created events in DB
        try {
            let presenter = prisma.authUser.findFirstOrThrow({
                where: {
                    email: presenters
                }
            })
            
            let dbRes = await prisma.event.create({
                data: {
                    creator: {
                        connect: {
                            id: user.userId
                        }
                    },
                    title: title,
                    datetime: eventDatetime,
                    description: description,
                    editedAt: [],
                    location: location,
                    presenters: (presenter === null) ? "" : (await presenter).id,
                    registrationLink: (registrationLink === null) ? "" : registrationLink
                }
            })
            let dbRes2 = await prisma.authUser.update({
                where: { id: user.userId },
                data: {
                    createdEvents: {
                        connect: {
                            id: dbRes.id
                        }
                    }
                }
            })
        } catch (err) {
            console.log(err)
            fail(500, {message: "Something went wrong"})
        }

    }
}