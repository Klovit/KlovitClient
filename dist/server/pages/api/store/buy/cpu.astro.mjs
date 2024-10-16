import { s as supabase } from '../../../../chunks/supabase_Cat3wBav.mjs';
import { c as config, d as db } from '../../../../chunks/config_CuAv1651.mjs';
import { E as ExpressRoute } from '../../../../chunks/express-route_B6BV_o9Q.mjs';
import 'mime';
import 'statuses';
import 'cookie';
import '@tinyhttp/accepts';
import { d as doubleCsrfProtection } from '../../../../chunks/middleware_DctY4RUm.mjs';
export { renderers } from '../../../../renderers.mjs';

const router = new ExpressRoute();
router.use(doubleCsrfProtection);
const POST = async function POST2({ request, cookies, redirect }) {
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
  const amount = formData.get("amount")?.toString();
  let cputype;
  if (config.resource_type === "GB") {
    cputype = " Core(s)";
  } else {
    cputype = "%";
  }
  if (amount) {
    try {
      const currentinfo = await db.get("user-" + email);
      const number = Number(amount) / config.coins.store.cpu.per;
      const cost = config.coins.store.cpu.cost * number;
      const oldbalance = currentinfo.balance;
      if (oldbalance < cost) {
        return redirect(`/store?error=You have insufficient Coins`);
      } else {
        const newbalance = oldbalance - cost;
        let currentcpu;
        if (typeof currentinfo.extraresources.cpu === "object") {
          currentcpu = currentinfo.extraresources.cpu;
        } else {
          currentcpu = 0;
        }
        let extra;
        extra = "extraresources" in currentinfo && "ram" in currentinfo.extraresources && "disk" in currentinfo.extraresources && "cpu" in currentinfo.extraresources && "servers" in currentinfo.extraresources ? currentinfo.extraresources : { ram: 0, disk: 0, cpu: 0, servers: 0 };
        const newextracpu = +extra.cpu + +amount;
        const newextra = {
          ram: extra.ram,
          disk: extra.disk,
          cpu: newextracpu,
          servers: extra.servers
        };
        const newinfo = {
          package: currentinfo.package,
          balance: newbalance,
          password: currentinfo.password,
          extraresources: newextra
        };
        await db.set("user-" + email, newinfo);
        return redirect(`/store?success=You have successfully bought ${amount} ${cputype} for ${cost} Coins`);
      }
    } catch (err) {
      console.log(err);
      return redirect(`/store?error=` + err);
    }
  } else {
    return redirect(`/store?error=A Field is missing.`);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
