#!/usr/bin/env node
/**
 * OG 이미지 생성 스크립트
 * 각 포스트마다 picsum.photos 배경 + 제목/요약 텍스트 오버레이 PNG를 생성합니다.
 * 생성된 이미지는 public/og/{lang}-{slug}.png 에 저장됩니다.
 *
 * 사용법: npm run generate-og
 */

const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const matter = require('gray-matter');

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;
const ROOT_DIR = path.join(__dirname, '..');
const OUTPUT_DIR = path.join(ROOT_DIR, 'public', 'og');
const POSTS_DIR = path.join(ROOT_DIR, '_posts');

// HTTP(S) GET with redirect following
function fetchBuffer(url, maxRedirects = 5) {
  return new Promise((resolve, reject) => {
    if (maxRedirects <= 0) return reject(new Error('Too many redirects'));
    const client = url.startsWith('https') ? https : http;
    client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        // follow redirect
        const next = res.headers.location.startsWith('http')
          ? res.headers.location
          : new URL(res.headers.location, url).href;
        resolve(fetchBuffer(next, maxRedirects - 1));
        return;
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      }
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

// 텍스트를 maxWidth에 맞게 줄바꿈 (한국어 포함)
function wrapText(ctx, text, maxWidth) {
  const lines = [];
  // 공백 기준 단어 분리 후, 각 단어는 다시 글자별로 처리
  const words = text.split(' ');
  let currentLine = '';

  for (const word of words) {
    const candidate = currentLine ? currentLine + ' ' + word : word;
    if (ctx.measureText(candidate).width <= maxWidth) {
      currentLine = candidate;
    } else {
      if (currentLine) {
        lines.push(currentLine);
        currentLine = '';
      }
      // 단어 자체가 maxWidth보다 길면 글자 단위로 분리
      for (const char of word) {
        const test = currentLine + char;
        if (ctx.measureText(test).width <= maxWidth) {
          currentLine = test;
        } else {
          if (currentLine) lines.push(currentLine);
          currentLine = char;
        }
      }
    }
  }
  if (currentLine) lines.push(currentLine);
  return lines;
}

async function generateOGImage(slug, lang, title, summary) {
  const seed = `${lang}-${slug}`;
  const picsumUrl = `https://picsum.photos/seed/${seed}/1200/630`;

  console.log(`  배경 이미지 다운로드: ${picsumUrl}`);
  const imgBuffer = await fetchBuffer(picsumUrl);
  const bgImage = await loadImage(imgBuffer);

  const canvas = createCanvas(OG_WIDTH, OG_HEIGHT);
  const ctx = canvas.getContext('2d');

  // 배경 이미지
  ctx.drawImage(bgImage, 0, 0, OG_WIDTH, OG_HEIGHT);

  // 어두운 그라디언트 오버레이 (하단이 더 진하게)
  const gradient = ctx.createLinearGradient(0, 0, 0, OG_HEIGHT);
  gradient.addColorStop(0, 'rgba(0,0,0,0.35)');
  gradient.addColorStop(1, 'rgba(0,0,0,0.75)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, OG_WIDTH, OG_HEIGHT);

  const PADDING = 80;
  const CONTENT_WIDTH = OG_WIDTH - PADDING * 2;

  // 사이트 이름 (상단)
  ctx.fillStyle = 'rgba(255,255,255,0.75)';
  ctx.font = 'bold 26px sans-serif';
  ctx.fillText('더누림 로그', PADDING, 72);

  // 제목
  ctx.fillStyle = '#ffffff';
  ctx.font = `bold 54px sans-serif`;
  const titleLines = wrapText(ctx, title, CONTENT_WIDTH).slice(0, 3);
  let y = 170;
  for (const line of titleLines) {
    ctx.fillText(line, PADDING, y);
    y += 68;
  }

  // 구분선
  ctx.strokeStyle = 'rgba(255,255,255,0.5)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(PADDING, y + 10);
  ctx.lineTo(PADDING + 80, y + 10);
  ctx.stroke();
  y += 44;

  // 요약
  if (summary) {
    ctx.fillStyle = 'rgba(255,255,255,0.82)';
    ctx.font = `26px sans-serif`;
    const summaryLines = wrapText(ctx, summary, CONTENT_WIDTH).slice(0, 3);
    for (const line of summaryLines) {
      if (y > OG_HEIGHT - 50) break;
      ctx.fillText(line, PADDING, y);
      y += 38;
    }
  }

  // 하단 URL
  ctx.fillStyle = 'rgba(255,255,255,0.5)';
  ctx.font = '22px sans-serif';
  ctx.fillText('blog.thenurim.life', PADDING, OG_HEIGHT - 36);

  return canvas.toBuffer('image/png');
}

// _posts 디렉토리를 재귀 탐색하여 .md 파일 수집
function collectPosts(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectPosts(fullPath));
    } else if (entry.name.endsWith('.md') && !entry.name.startsWith('_')) {
      results.push(fullPath);
    }
  }
  return results;
}

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const posts = collectPosts(POSTS_DIR);
  console.log(`포스트 ${posts.length}개 발견\n`);

  for (const filePath of posts) {
    const filename = path.basename(filePath);
    const match = filename.match(/^(\d{4}-\d{2}-\d{2})-(.+)\.md$/);
    if (!match) continue;

    const slug = match[2];
    const content = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(content);

    if (!data.title) {
      console.log(`[건너뜀] ${filename} — title 없음`);
      continue;
    }

    const lang = data.lang || 'ko';
    const outputFile = path.join(OUTPUT_DIR, `${lang}-${slug}.png`);
    const summary = data.summary || '';

    console.log(`[생성중] ${lang}-${slug}.png`);
    console.log(`  제목: ${data.title}`);

    try {
      const buffer = await generateOGImage(slug, lang, data.title, summary);
      fs.writeFileSync(outputFile, buffer);
      console.log(`  완료: ${outputFile}\n`);
    } catch (err) {
      console.error(`  오류: ${err.message}\n`);
    }
  }

  console.log('OG 이미지 생성 완료!');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
