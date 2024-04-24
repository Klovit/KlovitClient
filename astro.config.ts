import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import chalk from 'chalk';
import figlet from 'figlet';
import node from '@astrojs/node';
import config from "./src/config";
// https://astro.build/config
export default defineConfig({
  root: './',
  publicDir: 'public',
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  server: {
    port: Number(config.website.port),
    host: true,
  },
  site: `https://` + config.website.url,
  integrations: [
    sitemap(),
    tailwind()
  ],
});
console.clear();
console.log(chalk.gray('  '));
console.log(chalk.gray('  ') + figlet.textSync('KlovitClient'));
console.log(chalk.gray('  '));
console.log(
  chalk.gray('  ') +
    chalk.cyan('[KlovitClient]') +
    chalk.white(' You can now access the dashboard at ') +
    chalk.underline(config.website.url + '/'),
);
