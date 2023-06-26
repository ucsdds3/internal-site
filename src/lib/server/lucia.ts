import lucia from 'lucia-auth';
import prismaAdapter from "@lucia-auth/adapter-prisma";
import { dev } from "$app/environment";
import { prisma } from "./prisma";

export const auth = lucia({
    adapter: prismaAdapter(prisma),
    env: dev ? "DEV" : "PROD",
    transformUserData: (userData: any) => {
        return {
            userId: userData.id,
            name: userData.name,
            userEmail: userData.email,
            userStaff: userData.staff,
            userSubcom: userData.subcom,
        }
    }
})

export type Auth = typeof auth;