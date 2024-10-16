import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";
import chalk from "chalk";
import db from '../../database';
import { Response } from "node-fetch";
import config from '../../config';
import { ExpressRoute } from "@astro-utils/express-endpoints";
import doubleCsrfProtection from "../../middleware";
import restype from "src/restype";

const router = new ExpressRoute();
router.use(doubleCsrfProtection)

export const POST: APIRoute = async ({request, cookies, redirect}) => {


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

// Fetching data from Pterodactyl
let accountlistjson = await fetch(
    config.pterodactyl.url + "/api/application/users?include=servers&filter[email]=" + encodeURIComponent(email),
    {
        method: "get",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${config.pterodactyl.api}`
        }
    }
  );
let accountlist = await accountlistjson.json();
let userdata = accountlist.data.filter(acc => acc.attributes.email == email);

let cacheaccount = await fetch(config.pterodactyl.url + "/api/application/users/" + userdata[0].attributes.id + "?include=servers",
 {
  method: "get",
  headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${config.pterodactyl.api}` }
 });
if (await cacheaccount.statusText == "Not Found") {
  if (error) {
    console.log(chalk.red(`[KlovitClient] An error has occured on path "/server/create":`));
  };};
let cacheaccountinfo = JSON.parse(await cacheaccount.text());
    
const pterodactyl = cacheaccountinfo.attributes;
// Getting data from Request
const formData = await request.formData();
const srvid = formData.get("srvid")?.toString()
const srvname = formData.get("name")?.toString()
const srvram = formData.get("ram")?.toString()
const srvdisk = formData.get("disk")?.toString()
const srvcpu = formData.get("cpu")?.toString()
const srvegg = formData.get("egg")?.toString()
let pterorelationshipsserverdata = pterodactyl.relationships.servers.data.filter(name => name.attributes.id.toString() !== srvid);

  if (pterorelationshipsserverdata.length !== 1) return new Response(JSON.stringify({
    statustext: "Could not find server with that ID.",
    status: 422
  }));


  let ram = srvram ? (isNaN(parseFloat(srvram)) ? undefined : parseFloat(srvram)) : undefined;
  let disk = srvdisk ? (isNaN(parseFloat(srvdisk)) ? undefined : parseFloat(srvdisk)) : undefined;
  let cpu = srvcpu ? (isNaN(parseFloat(srvcpu)) ? undefined : parseFloat(srvcpu)) : undefined;

  if (ram || disk || cpu) {
    let packagename = await db.get("package-" + email);
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

    for (let name in (config.eggs)) {
      let value = config.eggs[name]
            if (value.info.egg == pterorelationshipsserverdata[0].attributes.egg) {
              attemptegg = value;
            };
          };
    let egginfo = attemptegg ? attemptegg : null;

    if (!egginfo) return redirect(`/edit?id=${srvid}&error=Missing Egg.`);

    let extra =
      await db.get("extraresources-" + email) ?
        await db.get("extraresources-" + email) :
        {
          ram: 0,
          disk: 0,
          cpu: 0,
          servers: 0
        };
        let extraram;
        let extradisk;
        let extracpu;
        if (config.resource_type === "GB") {
          extraram = extra.ram * 1024
          extradisk = extra.disk * 1024
          extracpu = extra.cpu * 100
        } else {
          extraram = extra.ram
          extradisk = extra.disk
          extracpu = extra.cpu
        }
let ram3;
let disk3;
let cpu3
if (config.resource_type === "GB") {
  ram3 = ram2/1024
  disk3 = disk2/1024
  cpu3 = cpu2/100
} else {
  ram3 = ram2
  disk3 = disk2
  cpu3 = cpu2
}

    if (+ram3 + +ram > +usrpackage.ram + +extraram) return redirect(`/edit?id=${srvid}&error=Exceeding your RAM limit.&limit=${usrpackage.ram + extraram - ram2}`);
    if (+disk3 + +disk > +usrpackage.disk + +extradisk) return redirect(`/edit?id=${srvid}&error=Exceeding your Disk limit.&limit=${usrpackage.disk + extradisk - disk2}`);
    if (+cpu3 + +cpu > +usrpackage.cpu + +extracpu) return redirect(`/edit?id=${srvid}&error=Exceeding your CPU limit.&limit=${usrpackage.cpu + extracpu - cpu2}`);
    if (egginfo.minimum.ram) if (ram < egginfo.minimum.ram) return redirect(`/edit?id=${srvid}&error=RAM is lower than Egg's minimum limit.&limit=${egginfo.minimum.ram}`);
    if (egginfo.minimum.disk) if (disk < egginfo.minimum.disk) return redirect(`/edit?id=${srvid}&error=Disk is lower than Egg's minimum limit.&limit=${egginfo.minimum.disk}`);
    if (egginfo.minimum.cpu) if (cpu < egginfo.minimum.cpu) return redirect(`/edit?id=${srvid}&error=CPU is lower than Egg's minimum limit.&limit=${egginfo.minimum.cpu}`);
    if (egginfo.maximum) {
      if (egginfo.maximum.ram) if (ram > egginfo.maximum.ram) return redirect(`/edit?id=${srvid}&error=RAM is Higher than Egg's minimum limit.&limit=${egginfo.maximum.ram}`);
      if (egginfo.maximum.disk) if (disk > egginfo.maximum.disk) return redirect(`/edit?id=${srvid}&error=Disk is Higher than Egg's minimum limit.&limit=${egginfo.maximum.disk}`);
      if (egginfo.maximum.cpu) if (cpu > egginfo.maximum.cpu) return redirect(`/edit?id=${srvid}&error=CPU is Higher than Egg's minimum limit.&limit=${egginfo.maximum.cpu}`);
    };

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
        method: "patch",
        headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${config.pterodactyl.key}`, "Accept": "application/json" },
        body: JSON.stringify({
          limits: limits,
          feature_limits: pterorelationshipsserverdata[0].attributes.feature_limits,
          allocation: pterorelationshipsserverdata[0].attributes.allocation
        })
      }
    );
    if (await serverinfo.statusText !== "OK") return redirect(`/edit?id=${srvid}&err=Error while modifying your server.`);
    let text = JSON.parse(await serverinfo.text());
    pterorelationshipsserverdata.push(text);
    redirect("/dashboard?success=Edited your server.");
  } else {
    redirect(`/edit?id=${srvid}&err=MISSINGVARIABLE`);
  }
}