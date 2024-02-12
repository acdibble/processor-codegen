import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import * as url from 'node:url';
import { diff } from './src/utils';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const generated = path.join(__dirname, 'generated');

const types = (
  await Promise.all(
    (await fs.readdir(generated))
      .filter((file) => file.startsWith('types-'))
      .map(async (file) => ({
        specVersion: Number(/\d+/.exec(file)?.[0]),
        contents: JSON.parse(
          await fs.readFile(path.join(generated, file), 'utf8'),
        ),
      })),
  )
).sort((a, b) => a.specVersion - b.specVersion);

for (let i = 1; i < types.length; i++) {
  const a = types[i - 1].contents;
  const b = types[i].contents;

  console.log(
    `diff between types-${types[i - 1].specVersion} and types-${types[i].specVersion}`,
  );

  const seenEvents = new Set();

  const changelog: [string, string][] = [];
  let maxLen = 0;

  for (const change of diff(a, b)) {
    const eventName = change.path.slice(0, 2).join('.');
    maxLen = Math.max(maxLen, eventName.length);
    if (change.path.length === 2) {
      changelog.push([eventName, change.type]);
    } else {
      if (!seenEvents.has(eventName)) {
        seenEvents.add(eventName);
        changelog.push([eventName, 'changed']);
      }
    }
  }

  for (const [eventName, type] of changelog) {
    console.log(`${eventName.padEnd(maxLen)} ${type}`);
  }

  console.log();
  // console.log(
  //   new Set([...diff(a, b)].map((change) => change.path.slice(0, 2).join('.'))),
  // );
}
