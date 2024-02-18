import * as fs from 'fs/promises';
import * as path from 'path';
import * as url from 'url';
import { MetadataOpts, fetchSpecVersion, parseMetadata } from './parser';
import CodeGenerator from './codegen';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const generate = async (opts?: MetadataOpts) => {
  const specVersion = await fetchSpecVersion(opts);

  const outfile = path.join(
    __dirname,
    '..',
    'generated',
    `types-${specVersion}.json`,
  );

  let parsedMetadata = await fs
    .readFile(outfile, 'utf8')
    .then((data) => JSON.parse(data))
    .catch(() => null);

  if (!parsedMetadata) {
    parsedMetadata = await parseMetadata(specVersion, opts);

    await fs.mkdir(path.dirname(outfile), { recursive: true });
    await fs.writeFile(outfile, JSON.stringify(parsedMetadata, null, 2));
  }

  const generator = new CodeGenerator();

  const result = await generator.generate(parsedMetadata);

  await fs.writeFile(`./generated/out-${specVersion}.ts`, result, 'utf8');
};

const hashes = [
  '0x46c8ca427e31ba73cbd1ad60500d4a7d173b1c80c9fb1afb76661d614f9c5cd7',
  '0x92bf0f963e3216ab92b0614efb2446f98a49d0a27ae8d6398216c1290706a55b',
  '0x74c771f0661aabdb5e15c3ee0ad880442a7c435ed6af76f24593288b2b29b1ca',
  '0x6bec68c93836d628a3c8c369a9d9a268b1b535e8cf1e7be8f79e2e38094e673a',
  '0x1d97de9fc920435bd5a83e0f326415b111247bcf79d36448f0053f11c843537c',
  '0x3138871e57e5acab638cc8f710122d6c1a17512b8a3336b9f48a013a23a9b19a',
  '0x1a4f814d25236c69a7c434798ba465e5d5952b4ef982270555c18835644ba229',
  '0x40038d384bf7cc625daa7b4ca183ebd78103ac684719c373f9a59d8e538c20c9',
  '0xe43cff19ac84e052dd468c9d4cbfaffd68c6b57108a25026df70ce97ae19f89f',
  '0xc6a97f294eb1cbb96fe09506f1782a417edf60e66ebf9a865eb791b832af7031',
  '0x7e9131b6f6f2e84bb620223e8303ca19933dd525b6ecc0336ae2046fb3016af3',
  '0x581bb91ae404f7265c337159f9b330452f2dd497c7b2c68c5ae8ff987b249469',
  '0x133ff2336c48450e036180d251ab0252f376d08898853499886973d9635c5578',
  '0xe43aa5ff4d9420e356873572d12169ed8f0c634ef3b28070bf30805d62c9e25e',
  '0x263f89fda776740cf845f463152c3957e2dbcc14d8828b56e1b3bf70e52ffc9e',
  '0x7196f59297d6650e9dd288291ca15b0b1af2a749db12c0a3ffcc5c8ccb48f615',
  '0x4a65c68a7ebf2fba576bd50902882dc4be1be0b6a1fdc5d75471cdfb17864eff',
];

for (const hash of hashes) {
  await generate({ hash, rpcUrl: 'https://perseverance.chainflip.xyz' });
}
