import { c as config } from './config_CuAv1651.mjs';

let restype;
if (config.resource_type === "MB" || config.resource_type === "GB") {
  restype = `${config.resource_type}(s)`;
} else {
  console.error("Unsupported Resource type");
}
const restype$1 = { restype };

export { restype$1 as r };
