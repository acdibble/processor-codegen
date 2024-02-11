import * as fs from 'fs/promises';
import { parseMetadata } from './parser';
import CodeGenerator from './codegen';

const parsed = await parseMetadata();

await fs.mkdir('generated', { recursive: true });
await fs.writeFile('generated/types.json', JSON.stringify(parsed, null, 2));

const generator = new CodeGenerator({ ignoredEvents: ['System.Remarked'] });

const result = await generator.generate(parsed);

console.log('===== GENERATED CODE =====');
console.log(result);
console.log('===== GENERATED CODE =====');
