import * as fs from 'fs';
import * as yaml from 'js-yaml';
const configcont = fs.readFileSync('config.yml', 'utf8');
const config = yaml.load(configcont);
export default config