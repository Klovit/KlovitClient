import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import chalk from 'chalk';
import figlet from 'figlet';
import node from '@astrojs/node';
import config from "./src/config";
import dotenv from 'dotenv';

import react from '@astrojs/react';

dotenv.config();
// https://astro.build/config
export default defineConfig({
  root: './',
  publicDir: 'public',
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  server: {
    port: Number(process.env.APP_PORT),
    host: true,
  },
  site: process.env.APP_URL,
  integrations: [sitemap(),     tailwind({
    applyBaseStyles: false,
  }), react()],
  prefetch: {
    prefetchAll: true
  },
});
console.clear();
console.log(chalk.gray('  '));
console.log(chalk.gray('  ') + figlet.textSync('KlovitClient'));
console.log(chalk.gray('  '));
console.log(
  chalk.gray('  ') +
    chalk.cyan('[KlovitClient]') +
    chalk.white(' You can now access the dashboard at the following addresses - '));
console.log("                 " + chalk.underline(`http://localhost:${process.env.APP_PORT}/`));
console.log("                 " + chalk.underline(`http://0.0.0.0:${process.env.APP_PORT}/`));