import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";
import chalk from "chalk";
import db from '../../../database';
import { Response } from "node-fetch";
import config from '../../../config';
import { ExpressRoute } from "@astro-utils/express-endpoints";
import doubleCsrfProtection from "../../../middleware";
import restype from "src/restype";

const router = new ExpressRoute();
router.use(doubleCsrfProtection)

export const POST: APIRoute = async ({request, cookies, redirect}) => {

    if (config.gifting.enabled) {

  // Session Validation.
const accessToken = cookies.get("sb-access-token");
const refreshToken = cookies.get("sb-refresh-token");
if (!accessToken || !refreshToken) {
  return redirect("/signin");
}
const { data, error } = await supabase.auth.setSession({
  refresh_token: refreshToken.value,
  access_token: accessToken.value,
});
if (error) {
console.log(error)
}
// Fetching data from SupaBase and giving it an identifier.
const {
  data: { user },
} = await supabase.auth.getUser()
const metadata = user.user_metadata
const username = metadata.full_name
const email = data?.user?.email

// Getting data from Request
const formData = await request.formData();
const receiver = formData.get("receiver")?.toString()
let giftcoins;
if (config.coins.enabled) {
    giftcoins = formData.get("giftcoins")?.toString()
} else {
    giftcoins = 0
}
let giftram;
if (formData.get("giftram")?.toString()) {
    giftram = formData.get("giftram")?.toString()
} else {
    giftram = 0
}
let giftdisk;
if (formData.get("giftdisk")?.toString()) {
    giftdisk = formData.get("giftdisk")?.toString()
} else {
    giftdisk = 0
}
let giftcpu;
if (formData.get("giftcpu")?.toString()) {
    giftcpu = formData.get("giftcpu")?.toString()
} else (
    giftcpu = 0
)
let giftslots;
if (formData.get("giftslots")?.toString()) {
    giftslots = formData.get("giftslots")?.toString()
} else {
    giftslots = 0
}
if (receiver && giftcoins && giftram && giftdisk && giftcpu && giftslots) {
  const currentsenderinfo = await db.get("user-" + email)
  const currentreceiverinfo = await db.get("user-" + receiver)
  if (typeof currentreceiverinfo == "object") {
    if (currentsenderinfo.extraresources.ram < giftram) {
        return redirect(`/gift?error=Insufficient RAM.`)
    }
    if (currentsenderinfo.extraresources.disk < giftdisk) {
        return redirect(`/gift?error=Insufficient Disk.`)
    }
    if (currentsenderinfo.extraresources.cpu < giftcpu) {
        return redirect(`/gift?error=Insufficient CPU.`)
    }
    if (currentsenderinfo.extraresources.servers < giftslots) {
        return redirect(`/gift?error=Insufficient Servers.`)
    }
    if (currentsenderinfo.extraresources.coins < giftcoins) {
        return redirect(`/gift?error=Insufficient Coins.`)
    }
    // Remove resources and coins from sender
    const newsenderram = +currentsenderinfo.extraresources.ram - +giftram
    const newsenderdisk = +currentsenderinfo.extraresources.disk - +giftdisk
    const newsenderservers = +currentsenderinfo.extraresources.servers - +giftslots
    const newsendercpu = +currentsenderinfo.extraresources.servers - +giftcpu
    const newsenderbalance = +currentsenderinfo.extraresources.balance - +giftcoins
    const newsenderinfo = {
        package: currentsenderinfo.package,
        balance: newsenderbalance,
        password: currentsenderinfo.password,
        extraresources: {
          ram: newsenderram,
          disk: newsenderdisk,
          cpu: newsendercpu,
          servers: newsenderservers
        }
      }
    // Add resources and coins to receiver
    const newreceiverram = +currentreceiverinfo.extraresources.ram + +giftram
    const newreceiverdisk = +currentreceiverinfo.extraresources.disk + +giftdisk
    const newreceiverservers = +currentreceiverinfo.extraresources.servers + +giftslots
    const newreceivercpu = +currentreceiverinfo.extraresources.servers + +giftcpu
    const newreceiverbalance = +currentreceiverinfo.extraresources.balance + +giftcoins
    const newreceiverinfo = {
        package: currentreceiverinfo.package,
        balance: newreceiverbalance,
        password: currentreceiverinfo.password,
        extraresources: {
          ram: newreceiverram,
          disk: newreceiverdisk,
          cpu: newreceivercpu,
          servers: newreceiverservers
        }
      }
      await db.set("user-" + email, newsenderinfo)
      await db.sent("user-" + receiver, newreceiverinfo)
    return redirect(`/account?success=Successfully gifted the amount of resources to user: ${receiver}`)
  } else {
    return redirect(`/gift?error=User with the email: ${receiver} doesn't exist.`)
  }

} else {
    return redirect(`/gift?error=Missing fields.`)
}
    } else {
        return redirect(`/dashboard?error=Gifting is disabled.`)
    }
}