import { s as supabase } from '../../../chunks/supabase_Cat3wBav.mjs';
import { c as config, d as db } from '../../../chunks/config_CuAv1651.mjs';
import { E as ExpressRoute } from '../../../chunks/express-route_B6BV_o9Q.mjs';
import 'mime';
import 'statuses';
import 'cookie';
import '@tinyhttp/accepts';
import { d as doubleCsrfProtection } from '../../../chunks/middleware_DctY4RUm.mjs';
export { renderers } from '../../../renderers.mjs';

const router = new ExpressRoute();
router.use(doubleCsrfProtection);
const POST = async ({ request, cookies, redirect }) => {
  if (config.gifting.enabled) {
    const accessToken = cookies.get("sb-access-token");
    const refreshToken = cookies.get("sb-refresh-token");
    if (!accessToken || !refreshToken) {
      return redirect("/signin");
    }
    const { data, error } = await supabase.auth.setSession({
      refresh_token: refreshToken.value,
      access_token: accessToken.value
    });
    if (error) {
      console.log(error);
    }
    const {
      data: { user }
    } = await supabase.auth.getUser();
    const metadata = user.user_metadata;
    metadata.full_name;
    const email = data?.user?.email;
    const formData = await request.formData();
    const receiver = formData.get("receiver")?.toString();
    let giftcoins;
    if (config.coins.enabled) {
      giftcoins = formData.get("giftcoins")?.toString();
    } else {
      giftcoins = 0;
    }
    let giftram;
    if (formData.get("giftram")?.toString()) {
      giftram = formData.get("giftram")?.toString();
    } else {
      giftram = 0;
    }
    let giftdisk;
    if (formData.get("giftdisk")?.toString()) {
      giftdisk = formData.get("giftdisk")?.toString();
    } else {
      giftdisk = 0;
    }
    let giftcpu;
    if (formData.get("giftcpu")?.toString()) {
      giftcpu = formData.get("giftcpu")?.toString();
    } else giftcpu = 0;
    let giftslots;
    if (formData.get("giftslots")?.toString()) {
      giftslots = formData.get("giftslots")?.toString();
    } else {
      giftslots = 0;
    }
    if (receiver && giftcoins && giftram && giftdisk && giftcpu && giftslots) {
      const currentsenderinfo = await db.get("user-" + email);
      const currentreceiverinfo = await db.get("user-" + receiver);
      if (typeof currentreceiverinfo == "object") {
        if (currentsenderinfo.extraresources.ram < giftram) {
          return redirect(`/gift?error=Insufficient RAM.`);
        }
        if (currentsenderinfo.extraresources.disk < giftdisk) {
          return redirect(`/gift?error=Insufficient Disk.`);
        }
        if (currentsenderinfo.extraresources.cpu < giftcpu) {
          return redirect(`/gift?error=Insufficient CPU.`);
        }
        if (currentsenderinfo.extraresources.servers < giftslots) {
          return redirect(`/gift?error=Insufficient Servers.`);
        }
        if (currentsenderinfo.extraresources.coins < giftcoins) {
          return redirect(`/gift?error=Insufficient Coins.`);
        }
        const newsenderram = +currentsenderinfo.extraresources.ram - +giftram;
        const newsenderdisk = +currentsenderinfo.extraresources.disk - +giftdisk;
        const newsenderservers = +currentsenderinfo.extraresources.servers - +giftslots;
        const newsendercpu = +currentsenderinfo.extraresources.servers - +giftcpu;
        const newsenderbalance = +currentsenderinfo.extraresources.balance - +giftcoins;
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
        };
        const newreceiverram = +currentreceiverinfo.extraresources.ram + +giftram;
        const newreceiverdisk = +currentreceiverinfo.extraresources.disk + +giftdisk;
        const newreceiverservers = +currentreceiverinfo.extraresources.servers + +giftslots;
        const newreceivercpu = +currentreceiverinfo.extraresources.servers + +giftcpu;
        const newreceiverbalance = +currentreceiverinfo.extraresources.balance + +giftcoins;
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
        };
        await db.set("user-" + email, newsenderinfo);
        await db.sent("user-" + receiver, newreceiverinfo);
        return redirect(`/account?success=Successfully gifted the amount of resources to user: ${receiver}`);
      } else {
        return redirect(`/gift?error=User with the email: ${receiver} doesn't exist.`);
      }
    } else {
      return redirect(`/gift?error=Missing fields.`);
    }
  } else {
    return redirect(`/dashboard?error=Gifting is disabled.`);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
