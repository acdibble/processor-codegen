import * as fs from 'fs/promises';
import * as path from 'path';
import { fetchAndParseSpec } from './parser';
import CodeGenerator from './codegen';
import { diffSpecs, getDirname } from './utils';

const __dirname = getDirname(import.meta.url);

const generateAllCode = async () => {
  const hashes = Object.keys(
    JSON.parse(
      await fs.readFile(path.join(__dirname, '..', 'metadata', 'specVersion.json'), 'utf8'),
    ),
  );

  let previousMetadata = {};

  for (const { metadata, specVersion } of metadataForHashes) {
    const eventsChanged = diffSpecs(previousMetadata, metadata);
    const generator = new CodeGenerator({ trackedEvents: eventsChanged });
    await generator.generate(specVersion, metadata);
    previousMetadata = metadata;
  }
};

await generateAllCode();
