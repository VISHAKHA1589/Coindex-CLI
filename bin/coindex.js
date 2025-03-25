#!/usr/bin/env node

import { program } from 'commander';
import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// Get the directory of the current script
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Resolve the path to package.json relative to this script
const pkgPath = `${__dirname}/../package.json`;
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

program
    .version(pkg.version)
    .command('key', 'Manage API Key -- https://pro.coinmarketcap.com/account')
    .command('check', 'Check coin price info')
    .parse(process.argv);
