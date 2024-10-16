import { d as db } from '../../../chunks/config_CuAv1651.mjs';
import { E as ExpressRoute } from '../../../chunks/express-route_B6BV_o9Q.mjs';
import 'mime';
import 'statuses';
import 'cookie';
import '@tinyhttp/accepts';
import { d as doubleCsrfProtection } from '../../../chunks/middleware_DctY4RUm.mjs';
export { renderers } from '../../../renderers.mjs';

const router = new ExpressRoute();
router.use(doubleCsrfProtection);
const POST = async function POST2({ request, cookies, redirect }) {
  const config_website = await db.get("config_website");
  const config_packagesandpayments = await db.get("config_paackages");
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
          "cost": 1e3,
          "per": 1
        },
        "disk": {
          "cost": 1e3,
          "per": 1
        },
        "cpu": {
          "cost": 1e3,
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
  };
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
          "startup": './install.sh"',
          "environment": {
            "NODE_VERSION": "latest",
            "PMMP_VERSION": "PM5",
            "NODE_MAIN_FILE": "index.js",
            "HIBERNATE_STATUS": "true"
          }
        }
      }
    }
  };
  const config2 = { config_website, config_currencyandstore, config_nodesandeggs, config_packagesandpayments };
  await db.set("config", config2);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
