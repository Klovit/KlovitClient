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

export const POST: APIRoute = async function POST({ request, cookies, redirect }) {
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
const srvname = formData.get("srvname")?.toString()
const srvram = formData.get("ram")?.toString()
const srvdisk = formData.get("disk")?.toString()
const srvcpu = formData.get("cpu")?.toString()
const srvegg = formData.get("egg")?.toString()
const srvlocation = formData.get("location")?.toString()
if (srvram || srvdisk || srvcpu || srvegg || srvlocation) {
try {


  let packagename = await db.get("package-" + email);
  let usrpackage = config.packages.list[packagename ? packagename : config.packages.default];

  let extra =
    await db.get("extraresources-" + email) ||
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
  let ram2 = 0;
  let disk2 = 0;
  let cpu2 = 0;
  let servers2 = pterodactyl.relationships.servers.data.length;
  for (let i = 0, len = pterodactyl.relationships.servers.data.length; i < len; i++) {
    ram2 = ram2 + pterodactyl.relationships.servers.data[i].attributes.limits.memory;
    disk2 = disk2 + pterodactyl.relationships.servers.data[i].attributes.limits.disk;
    cpu2 = cpu2 + pterodactyl.relationships.servers.data[i].attributes.limits.cpu;
  };
  if (servers2 >= usrpackage.servers + extra.servers) {
    return redirect(`/create?error=You have reached your package's server creation limit.`);
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
  
  let name = decodeURIComponent(srvname);
  if (name.length < 1) { 
    return redirect(`/create?error=The length of server's name is less than 1`);
  }
  if (name.length > 191) {
    return redirect(`/create?error=The length of server's name is more than 191`);
  }

  let location = srvlocation;

  if (Object.entries(config.locations).filter(vname => vname[0] == location).length !== 1) {
    return redirect(`create?error=INVALIDLOCATION`);
  }
  let egginfo = config.eggs[srvegg];
  if (!config.eggs[srvegg]) {
    return redirect(`/create?error=INVALIDEGG`);
  }
  let ram;
  if (config.resource_type === "GB") {
    ram = parseFloat(srvram) * 1024
  }
  else {
    ram = parseFloat(srvram)
  }
  let disk;
  if (config.resource_type === "GB") {
    disk = parseFloat(srvdisk) * 1024
  }
  else {
    disk = parseFloat(srvdisk)
  }
  let cpu;
  if (config.resource_type === "GB") {
    cpu = parseFloat(srvcpu) * 100
  }
  else {
    cpu = parseFloat(srvcpu)
  }
  if (!isNaN(ram) && !isNaN(disk) && !isNaN(cpu)) {
    if (+ram3 + +srvram > +usrpackage.ram + +extra.ram) {
      return redirect(`/create?error=The RAM given exceeds your Package's RAM limit.`);
    }
    if (+disk3 + +srvdisk > +usrpackage.disk + +extradisk) {
      return redirect(`/create?error=The Disk given exceeds your Package's Disk limit.`);
    }
    if (+cpu3 + +srvcpu > +usrpackage.cpu + +extracpu) {
      return redirect(`/create?error=The CPU given exceeds your Package's CPU limit.`);
    }
    if (egginfo.limits.minimum.ram) if (srvram < egginfo.limits.minimum.ram) {
      return redirect(`/create?error=Given RAM is below the minimum limit.&limit=${egginfo.limits.minimum.ram}`);
    }
    if (egginfo.limits.minimum.disk) if (srvdisk < egginfo.limits.minimum.disk) {
      return redirect(`/create?error=Given Disk is below the minimum limit.&limit=${egginfo.limits.minimum.disk}`);
    }
    if (egginfo.limits.minimum.cpu) if (srvcpu < egginfo.limits.minimum.cpu) {
      return redirect(`/create?error=Given CPU is below the minimum limit.&limit=${egginfo.limits.minimum.cpu}`);
    }
    if (egginfo.limits.maximum) {
      if (egginfo.limits.maximum.ram) if (srvram > egginfo.limits.maximum.ram) {
        return redirect(`/create?error=Given CPU is above the maximum limit.&num=${egginfo.limits.maximum.ram}`);
      }
      if (egginfo.limits.maximum.disk) if (srvdisk > egginfo.limits.maximum.disk) {
        return redirect(`/create?error=Given CPU is above the maximum limit.&num=${egginfo.limits.maximum.disk}`);
      }
      if (egginfo.limits.maximum.cpu) if (srvcpu > egginfo.limits.maximum.cpu) {
        return redirect(`/create?error=Given CPU is above the maximum limit.&num=${egginfo.limits.maximum.cpu}`)
      }
    }
    let serverinfo = await fetch(
      config.pterodactyl.url + "/api/application/servers",
      {
        method: "post",
        headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${config.pterodactyl.api}`, "Accept": "application/json" },
        body: JSON.stringify(
          {
            name: name,
            user: userdata[0].attributes.id,
            egg: egginfo.info.egg,
            docker_image: egginfo.info.docker_image,
            startup: egginfo.info.startup,
            environment: egginfo.info.environment,
            limits: {
              memory: ram,
              cpu: cpu,
              disk: disk,
              swap: -1,
              io: 500
            },
            feature_limits: {
              databases: egginfo.limits.feature.databases,
              backups: egginfo.limits.feature.backups,
              allocations: egginfo.limits.feature.allocations
            },
            deploy: {
              locations: [srvlocation],
              dedicated_ip: false,
              port_range: []
            }
          }
        )
      }
    );
    await serverinfo
    if (serverinfo.statusText !== "Created") {
      console.log(serverinfo)
      return redirect(`/create?error=Error while creating your server.`);
    }
    let serverinfotext = await serverinfo.json();
    let cputype;
    if (config.resource_type === "GB") { cputype = " Cores"} else { cputype = "%"}
    console.log(`${username} created a new server named \`${srvname}\` with the following specs:\nMemory: ${srvram} ${restype.restype}\nCPU: ${srvcpu}${cputype}\nDisk: ${srvdisk} ${restype.restype}`)
    return redirect("/dashboard?success=Created your Server.");
  }
} 
catch(err) {
  console.log(err)
  return redirect(`/create?error=err`);
}
} else {
  return redirect(`/create?error=A Field is missing.`);
}
}

