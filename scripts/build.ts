import fs from 'fs';

import { SPL_TOKENS, SplTokenInfo } from '../src';

const TOKENS: SplTokenInfo[] = [];

Object.keys(SPL_TOKENS).forEach((symbol) => {
  TOKENS.push(SPL_TOKENS[symbol]);
});

const dist = './json';

if (!fs.existsSync(dist)) {
  fs.mkdirSync(dist);
}

fs.writeFileSync(`${dist}/tokens.json`, JSON.stringify(TOKENS, null, 2));
