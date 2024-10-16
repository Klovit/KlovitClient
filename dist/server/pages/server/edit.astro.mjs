import { s as supabase } from '../../chunks/supabase_Cat3wBav.mjs';
import chalk from 'chalk';
import { c as config, d as db } from '../../chunks/config_CuAv1651.mjs';
import { E as ExpressRoute } from '../../chunks/express-route_B6BV_o9Q.mjs';
import 'mime';
import 'statuses';
import 'cookie';
import '@tinyhttp/accepts';
import { d as doubleCsrfProtection } from '../../chunks/middleware_DctY4RUm.mjs';
export { renderers } from '../../renderers.mjs';

const router = new ExpressRoute();
router.use(doubleCsrfProtection);
const POST = async ({ request, cookies, redirect }) => {
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
  let accountlistjson = await fetch(
    config.pterodactyl.url + "/api/application/users?include=servers&filter[email]=" + encodeURIComponent(email),
    {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${config.pterodactyl.api}`
      }
    }
  );
  let accountlist = await accountlistjson.json();
  let userdata = accountlist.data.filter((acc) => acc.attributes.email == email);
  let cacheaccount = await fetch(
    config.pterodactyl.url + "/api/application/users/" + userdata[0].attributes.id + "?include=servers",
    {
      method: "get",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${config.pterodactyl.api}` }
    }
  );
  if (await cacheaccount.statusText == "Not Found") {
    if (error) {
      console.log(chalk.red(`[KlovitClient] An error has occured on path "/server/create":`));
    }
  }
  let cacheaccountinfo = JSON.parse(await cacheaccount.text());
  const pterodactyl = cacheaccountinfo.attributes;
  const formData = await request.formData();
  const srvid = formData.get("srvid")?.toString();
  formData.get("name")?.toString();
  const srvramraw = formData.get("ram")?.toString();
  const srvdiskraw = formData.get("disk")?.toString();
  const srvcpuraw = formData.get("cpu")?.toString();
  formData.get("egg")?.toString();
  let pterorelationshipsserverdata = pterodactyl.relationships.servers.data.filter((name) => name.attributes.id.toString() === srvid);
  if (pterorelationshipsserverdata.length !== 1) {
    console.log(pterorelationshipsserverdata.length);
    return redirect("/dashboard?error=Server Not Found");
  }
  let srvram;
  let srvdisk;
  let srvcpu;
  if (config.resource_type === "GB") {
    srvram = Number(srvramraw) * 1024;
    srvdisk = Number(srvdiskraw) * 1024;
    srvcpu = Number(srvcpuraw) * 100;
  } else {
    srvram = srvramraw;
    srvcpu = srvcpuraw;
    srvdisk = srvdiskraw;
  }
  let ram = srvram ? isNaN(parseFloat(srvram)) ? void 0 : parseFloat(srvram) : void 0;
  let disk = srvdisk ? isNaN(parseFloat(srvdisk)) ? void 0 : parseFloat(srvdisk) : void 0;
  let cpu = srvcpu ? isNaN(parseFloat(srvcpu)) ? void 0 : parseFloat(srvcpu) : void 0;
  if (ram || disk || cpu) {
    let usrinfo = await db.get("user-" + email);
    let packagename = usrinfo.package;
    let usrpackage = config.packages.list[packagename ? packagename : config.packages.default];
    let ram2 = 0;
    let disk2 = 0;
    let cpu2 = 0;
    for (let i = 0, len = pterorelationshipsserverdata.length; i < len; i++) {
      ram2 = ram2 + pterorelationshipsserverdata[i].attributes.limits.memory;
      disk2 = disk2 + pterorelationshipsserverdata[i].attributes.limits.disk;
      cpu2 = cpu2 + pterorelationshipsserverdata[i].attributes.limits.cpu;
    }
    let attemptegg = null;
    for (let name in config.eggs) {
      let value = config.eggs[name];
      if (value.info.egg == pterorelationshipsserverdata[0].attributes.egg) {
        attemptegg = value;
      }
    }
    let egginfo = attemptegg ? attemptegg : null;
    if (!egginfo) return redirect(`/edit?id=${srvid}&error=Missing Egg.`);
    let extra;
    extra = "extraresources" in usrinfo && "ram" in usrinfo.extraresources && "disk" in usrinfo.extraresources && "cpu" in usrinfo.extraresources && "servers" in usrinfo.extraresources ? usrinfo.extraresources : { ram: 0, disk: 0, cpu: 0, servers: 0 };
    let extraram;
    let extradisk;
    let extracpu;
    if (config.resource_type === "GB") {
      extraram = extra.ram;
      extradisk = extra.disk;
      extracpu = extra.cpu;
    } else {
      extraram = extra.ram;
      extradisk = extra.disk;
      extracpu = extra.cpu;
    }
    let ram3;
    let disk3;
    let cpu3;
    if (config.resource_type === "GB") {
      ram3 = ram2 / 1024;
      disk3 = disk2 / 1024;
      cpu3 = cpu2 / 100;
    } else {
      ram3 = ram2;
      disk3 = disk2;
      cpu3 = cpu2;
    }
    if (config.resource_type === "GB") {
      if (+ram3 + +ram / 1024 > +usrpackage.ram + +extraram) return redirect(`/edit?id=${srvid}&error=Exceeding your RAM limit.&limit=${+usrpackage.ram + +extraram - +ram3}`);
      if (+disk3 + +disk / 1024 > +usrpackage.disk + +extradisk) return redirect(`/edit?id=${srvid}&error=Exceeding your Disk limit.&limit=${+usrpackage.disk + +extradisk - +disk3}`);
      if (+cpu3 + +cpu / 100 > +usrpackage.cpu + +extracpu) return redirect(`/edit?id=${srvid}&error=Exceeding your CPU limit.&limit=${+usrpackage.cpu + +extracpu - +cpu3}`);
      if (egginfo.limits.minimum.ram) {
        if (ram < egginfo.limits.minimum.ram) return redirect(`/edit?id=${srvid}&error=RAM is lower than Egg's minimum limit.&limit=${egginfo.minimum.ram}`);
      }
      if (egginfo.limits.minimum.disk) {
        if (disk < egginfo.limits.minimum.disk) return redirect(`/edit?id=${srvid}&error=Disk is lower than Egg's minimum limit.&limit=${egginfo.minimum.disk}`);
      }
      if (egginfo.limits.minimum.cpu) {
        if (cpu < egginfo.limits.minimum.cpu) return redirect(`/edit?id=${srvid}&error=CPU is lower than Egg's minimum limit.&limit=${egginfo.minimum.cpu}`);
      }
      if (egginfo.limits.maximum) {
        if (egginfo.limits.maximum.ram) {
          if (ram > egginfo.limits.maximum.ram) return redirect(`/edit?id=${srvid}&error=RAM is Higher than Egg's minimum limit.&limit=${egginfo.maximum.ram}`);
        }
        if (egginfo.limits.maximum.disk) {
          if (disk > egginfo.limits.maximum.disk) return redirect(`/edit?id=${srvid}&error=Disk is Higher than Egg's minimum limit.&limit=${egginfo.maximum.disk}`);
        }
        if (egginfo.limits.maximum.cpu) {
          if (cpu > egginfo.limits.maximum.cpu) return redirect(`/edit?id=${srvid}&error=CPU is Higher than Egg's minimum limit.&limit=${egginfo.maximum.cpu}`);
        }
      }
    } else {
      if (+ram3 + +ram > +usrpackage.ram + +extraram) return redirect(`/edit?id=${srvid}&error=Exceeding your RAM limit.&limit=${+usrpackage.ram + +extraram - +ram3}`);
      if (+disk3 + +disk > +usrpackage.disk + +extradisk) return redirect(`/edit?id=${srvid}&error=Exceeding your Disk limit.&limit=${+usrpackage.disk + +extradisk - +disk3}`);
      if (+cpu3 + +cpu > +usrpackage.cpu + +extracpu) return redirect(`/edit?id=${srvid}&error=Exceeding your CPU limit.&limit=${+usrpackage.cpu + +extracpu - +cpu3}`);
      if (egginfo.limits.minimum.ram) {
        if (ram < egginfo.limits.minimum.ram) return redirect(`/edit?id=${srvid}&error=RAM is lower than Egg's minimum limit.&limit=${egginfo.minimum.ram}`);
      }
      if (egginfo.limits.minimum.disk) {
        if (disk < egginfo.limits.minimum.disk) return redirect(`/edit?id=${srvid}&error=Disk is lower than Egg's minimum limit.&limit=${egginfo.minimum.disk}`);
      }
      if (egginfo.limits.minimum.cpu) {
        if (cpu < egginfo.limits.minimum.cpu) return redirect(`/edit?id=${srvid}&error=CPU is lower than Egg's minimum limit.&limit=${egginfo.minimum.cpu}`);
      }
      if (egginfo.limits.maximum) {
        if (egginfo.limits.maximum.ram) {
          if (ram > egginfo.limits.maximum.ram) return redirect(`/edit?id=${srvid}&error=RAM is Higher than Egg's minimum limit.&limit=${egginfo.maximum.ram}`);
        }
        if (egginfo.limits.maximum.disk) {
          if (disk > egginfo.limits.maximum.disk) return redirect(`/edit?id=${srvid}&error=Disk is Higher than Egg's minimum limit.&limit=${egginfo.maximum.disk}`);
        }
        if (egginfo.limits.maximum.cpu) {
          if (cpu > egginfo.limits.maximum.cpu) return redirect(`/edit?id=${srvid}&error=CPU is Higher than Egg's minimum limit.&limit=${egginfo.maximum.cpu}`);
        }
      }
    }
    let limits = {
      memory: ram ? ram : pterorelationshipsserverdata[0].attributes.limits.memory,
      disk: disk ? disk : pterorelationshipsserverdata[0].attributes.limits.disk,
      cpu: cpu ? cpu : pterorelationshipsserverdata[0].attributes.limits.cpu,
      swap: egginfo ? pterorelationshipsserverdata[0].attributes.limits.swap : -1,
      io: egginfo ? pterorelationshipsserverdata[0].attributes.limits.io : 500
    };
    let serverinfo = await fetch(
      config.pterodactyl.url + "/api/application/servers/" + srvid + "/build",
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${config.pterodactyl.api}`, "Accept": "application/json" },
        body: JSON.stringify({
          limits,
          feature_limits: pterorelationshipsserverdata[0].attributes.feature_limits,
          allocation: pterorelationshipsserverdata[0].attributes.allocation
        })
      }
    );
    if (await serverinfo.statusText !== "OK") {
      return redirect(`/edit?id=${srvid}&error=Error while modifying your server.`);
    }
    return redirect("/dashboard?success=Edited your server.");
  } else {
    return redirect(`/edit?id=${srvid}&error=Missing Variable`);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
