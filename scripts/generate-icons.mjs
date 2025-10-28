import sharp from 'sharp';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { writeFile } from 'node:fs/promises';

const root = path.resolve(process.cwd());
const publicDir = path.join(root, 'public');
const logoSvgPath = path.join(publicDir, 'logo.svg');

async function ensurePngSizes() {
  const svg = await readFile(logoSvgPath);

  const outputs = [
    { size: 192, file: path.join(publicDir, 'logo-192.png') },
    { size: 512, file: path.join(publicDir, 'logo-512.png') },
  ];

  for (const { size, file } of outputs) {
    await sharp(svg)
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ compressionLevel: 9 })
      .toFile(file);
    console.log(`Generated ${path.basename(file)} (${size}x${size})`);
  }

  // Try to generate favicon.ico if png-to-ico is available; otherwise skip
  try {
    const mod = await import('png-to-ico');
    const pngToIco = mod.default ?? mod;
    const icoBuffer = await pngToIco([
      path.join(publicDir, 'logo-192.png'),
      path.join(publicDir, 'logo-512.png'),
    ]);
    const faviconPath = path.join(publicDir, 'favicon.ico');
    await writeFile(faviconPath, icoBuffer);
    console.log('Generated favicon.ico from logo PNGs');
  } catch (e) {
    console.warn('png-to-ico not available; skipping favicon.ico generation.');
  }
}

ensurePngSizes().catch((err) => {
  console.error(err);
  process.exit(1);
});