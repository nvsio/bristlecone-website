#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const root = new URL('..', import.meta.url).pathname;
const publicDir = path.join(root, 'public');
const svgPath = path.join(publicDir, 'logo.svg');
const tmpPng = path.join(publicDir, 'favicon-256.png');
const icoPath = path.join(publicDir, 'favicon.ico');

async function run() {
  try {
    const svg = await fs.readFile(svgPath);
    // Render SVG to 256x256 PNG, with transparent background
    await sharp(svg)
      .resize(256, 256, { fit: 'contain', background: '#faf9f7' })
      .flatten({ background: '#faf9f7' })
      .png()
      .toFile(tmpPng);

    const icoBuf = await pngToIco([
      path.join(publicDir, 'favicon-256.png'),
    ]);
    await fs.writeFile(icoPath, icoBuf);
    await fs.rm(tmpPng, { force: true });
    console.log('Favicon written to', icoPath);
  } catch (err) {
    console.error('Failed generating favicon:', err);
    process.exit(1);
  }
}

run();
