"use server"
import { currentUser } from "@clerk/nextjs"
import client from "@/lib/prisma"

export const getUserClients = async () => {
	try {
		const user = await currentUser()
		if (user) {
			const clients = await client.customer.count({
				where: {
					Domain: {
						User: {
							clerkId: user.id
						}
					}
				},	
			})
			if (clients) {
				return clients
			}
		}
	} catch(e) {
		console.log(e)
	}
}
