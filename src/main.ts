import * as fs from 'fs/promises';
import { parseMetadata } from './parser';

const parsed = parseMetadata();

await fs.mkdir('generated', { recursive: true });
await fs.writeFile('generated/types.json', JSON.stringify(parsed, null, 2));
