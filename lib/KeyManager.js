import ConfigStore from 'configstore';
import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// Get the directory of the current script
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Resolve the path to package.json relative to this script
const pkgPath = `${__dirname}/../package.json`;
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

class KeyManager {
    constructor() {
        this.conf = new ConfigStore(pkg.name);
    }

    setKey(key) {
        if (!key) {
            throw new Error('API key is required');
        }
        this.conf.set('apikey', key);
        return key;
    }

    getKey() {
        const key = this.conf.get('apikey');
        if (!key) {
            throw new Error('No API key found -- get a key at https://pro.coinmarketcap.com/account');
        }
        return key;
    }

    deleteKey() {
        const key = this.conf.get('apikey');
        if (!key) {
            throw new Error('No API key found -- get a key at https://pro.coinmarketcap.com/account');
        }
        this.conf.delete('apikey');
        return key;
    }
}

export default KeyManager;
