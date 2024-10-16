import { s as supabase } from '../../../../chunks/supabase_Cat3wBav.mjs';
import { d as db, c as config } from '../../../../chunks/config_CuAv1651.mjs';
import { E as ExpressRoute } from '../../../../chunks/express-route_B6BV_o9Q.mjs';
import 'mime';
import 'statuses';
import 'cookie';
import '@tinyhttp/accepts';
import { d as doubleCsrfProtection } from '../../../../chunks/middleware_DctY4RUm.mjs';
import '../../../../chunks/restype_D7TyzxY8.mjs';
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
  if (amount) {
    try {
      const currentinfo = await db.get("user-" + email);
      const number = Number(amount) / config.coins.store.servers.per;
      const cost = config.coins.store.servers.cost * number;
      const oldbalance = currentinfo.balance;
      if (oldbalance < cost) {
        return redirect(`/store?error=You have insufficient Coins`);
      } else {
        const newbalance = oldbalance - cost;
        let extra;
        extra = "extraresources" in currentinfo && "ram" in currentinfo.extraresources && "disk" in currentinfo.extraresources && "cpu" in currentinfo.extraresources && "servers" in currentinfo.extraresources ? currentinfo.extraresources : { ram: 0, disk: 0, cpu: 0, servers: 0 };
        const newextraservers = +extra.servers + +amount;
        const newextra = {
          ram: extra.ram,
          disk: extra.disk,
          cpu: extra.cpu,
          servers: newextraservers
        };
        const newinfo = {
          package: currentinfo.package,
          balance: newbalance,
          password: currentinfo.password,
          extraresources: newextra
        };
        await db.set("user-" + email, newinfo);
        return redirect(`/store?success=You have successfully bought ${amount} Slots for ${cost} Coins`);
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
