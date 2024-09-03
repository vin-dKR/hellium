import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import PusherClient from 'pusher-js'
import PusherServer from 'pusher'


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const extractUUIDFromString = (url: string) => {
  return url.match(
    /^[0-9a-f]{8}-?[0-9a-f]{4}-?[1-5][0-9a-f]{3}-?[89ab][0-9a-f]{3}-?[0-9a-f]{12}$/i
  )
}

export const pusherServer = {}
// export const pusherServer = new PusherServer({
//   appId: process.env.PUSHER_APP_ID as string,
//   key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY as string,
//   secret: process.env.NEXT_APP_SECRET as string,
//   cluster: 'mt1',
//   useTLS: true,
// })

export const pusherClient = {}
// export const pusherClient = new PusherClient(
//   process.env.NEXT_PUBLIC_PUSHER_APP_KEY as string, 
//   {
//     cluster: 'mt1'
//   }
// )

export const postToParent = (message: string) => {
  // Sends a message to the parent window (if in an iframe) using the postMessage API.
  // The '*' target origin allows the message to be sent to any origin.
  window.parent.postMessage(message, '*')
}

export const getMonthName = (month: number) => {
  return month == 1
    ? 'Jan'
    : month == 2
    ? 'Feb'
    : month == 3
    ? 'Mar'
    : month == 4
    ? 'Apr'
    : month == 5
    ? 'May'
    : month == 6
    ? 'Jun'
    : month == 7
    ? 'Jul'
    : month == 8
    ? 'Aug'
    : month == 9
    ? 'Sep'
    : month == 10
    ? 'Oct'
    : month == 11
    ? 'Nov'
    : month == 12 && 'Dec'
}