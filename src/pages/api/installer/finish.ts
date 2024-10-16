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

export const POST: APIRoute = async function POST({ request, cookies, redirect }) {



const config_website = await db.get("config_website")

const config_packagesandpayments = await db.get("config_paackages")

const config_currencyandstore = {
  "gifting": {
    "enabled": false
  },
  "coins": {
    "enabled": true,
    "earn": {
      "enabled": true,
      "links": {
        "atglinks": {
          "enabled": true,
          "api": "785159b542f060cb98b55b27a09b2034df506bff",
          "amount": "5",
          "dailylimit": null,
          "minimumTime": "100"
        }
      }
    },
    "store": {
      "enabled": true,
      "ram": {
        "cost": 1000,
        "per": 1
      },
      "disk": {
        "cost": 1000,
        "per": 1
      },
      "cpu": {
        "cost": 1000,
        "per": 1
      },
      "servers": {
        "cost": 100,
        "per": 1
      },
      "coins": {
        "cost": 1,
        "per": 100
      }
    }
  }
}
const config_nodesandeggs = {
    
    "locations": {
        "1": {
          "name": "Default Location 1",
          "package": null
        }
      },
      "eggs": {
        "klovitegg": {
          "display": "MultiEgg | KlovitEgg",
          "limits": {
            "minimum": {
              "ram": 1,
              "disk": 1,
              "cpu": 1
            },
            "maximum": {
              "ram": null,
              "disk": null,
              "cpu": null
            },
            "feature": {
              "databases": 1,
              "backups": 1,
              "allocations": 1
            }
          },
          "info": {
            "egg": 15,
            "docker_image": "ghcr.io/beastgamer81/klovitegg:latest",
            "startup": "./install.sh\"",
            "environment": {
              "NODE_VERSION": "latest",
              "PMMP_VERSION": "PM5",
              "NODE_MAIN_FILE": "index.js",
              "HIBERNATE_STATUS": "true"
            }
          }
        }
      }
}
const config = {config_website,config_currencyandstore,config_nodesandeggs,config_packagesandpayments}
await db.set("config", config)

}