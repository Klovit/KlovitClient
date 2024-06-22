import * as fs from 'fs';
import * as yaml from 'js-yaml';
import * as toml from 'toml';
import chokidar from 'chokidar';
import dotenv from 'dotenv';

dotenv.config();

let filePath;
if (process.env.CONFIG_TYPE === "YML") {
    filePath = "./config.yml"
}
else if (process.env.CONFIG_TYPE === "TOML") {
    filePath = "./config.toml"
}
else {
 console.log("ERROR: Unsupported Config Type.")
}
function loadconfig() {
    let config
    if (process.env.CONFIG_TYPE === "YML") {
        config = loadYamlFile()
    }
    else if (process.env.CONFIG_TYPE === "TOML") {
        config = loadTomlFile()
    }
    else {
     console.log("ERROR: Unsupported Config Type.")
    }
    return config
}

function loadTomlFile() {
    const config = toml.parse(fs.readFileSync(filePath, 'utf8'));
    return config;
}

function loadYamlFile() {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        return yaml.load(fileContents);
}
let config = loadconfig();
console.log('Loaded Config.');
const watcher = chokidar.watch(filePath);
watcher.on('change', () => {
    console.log('Reloading Config.');
    config = loadconfig();
    console.log('Reloaded Config.');
});
export default config;
