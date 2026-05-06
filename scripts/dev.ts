// Local development server: hugo + pagefind together.
//
// `hugo server` by default writes files to `public/` while serving (you can
// opt into memory-only rendering with `--renderToMemory`, but we want the
// disk copy so pagefind has something to walk). Once the initial build is on
// disk, this script runs pagefind once so the navbar search box is wired up.
// No second port, no python -m http.server.
//
// Trade-off: pagefind takes ~60-90s on full content. We index once at startup
// and let the user re-run `npm run pagefind` manually if they need fresh
// search results after content edits. Hot-reload of HTML pages still works
// without re-indexing — only the search results lag until pagefind is rerun.
import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { setTimeout as sleep } from 'node:timers/promises';

const args = process.argv.slice(2);
const port = Number(args[args.indexOf('--port') + 1] || 1313);

console.log(`[dev] starting hugo server (port ${port})...`);
const hugo = spawn(
  'hugo',
  [
    'server',
    '--noBuildLock',
    '--bind',
    '127.0.0.1',
    '--port',
    String(port),
  ],
  { stdio: 'inherit' },
);

const shutdown = () => {
  if (!hugo.killed) hugo.kill();
};
process.on('SIGINT', () => {
  shutdown();
  process.exit(0);
});
process.on('SIGTERM', () => {
  shutdown();
  process.exit(0);
});
hugo.on('exit', (code) => process.exit(code ?? 0));

// Wait for initial render, then run pagefind once.
(async () => {
  const deadline = Date.now() + 120_000;
  while (!existsSync('public/index.html')) {
    if (Date.now() > deadline) {
      console.error('[dev] hugo did not produce public/index.html within 120s');
      shutdown();
      process.exit(1);
    }
    await sleep(500);
  }

  console.log('\n[dev] initial hugo build complete; running pagefind…');
  const pagefind = spawn('npx', ['pagefind', '--site', 'public', '--silent'], {
    stdio: 'inherit',
  });
  pagefind.on('exit', () => {
    console.log(
      `\n[dev] pagefind index ready. open http://localhost:${port}/ to browse.\n` +
        '[dev] hot-reload of pages still works automatically.\n' +
        '[dev] for fresh search results after content edits, run `npm run pagefind` in another terminal.\n',
    );
  });
})();
