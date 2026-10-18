import { spawnSync } from 'node:child_process';

interface CheckItem {
  name: string;
  command: string;
  args: string[];
}

const checks: CheckItem[] = [
  { name: 'Node.js', command: 'node', args: ['--version'] },
  { name: 'FFmpeg Binary', command: 'ffmpeg', args: ['-version'] },
  { name: 'FFprobe Binary', command: 'ffprobe', args: ['-version'] },
];

console.log('--- FFmpeg AI Agent Environment Doctor ---');
let hasError = false;

for (const check of checks) {
  try {
    const res = spawnSync(check.command, check.args, { encoding: 'utf-8', windowsHide: true });
    if (res.error || res.status !== 0) {
      console.error(`[FAIL] ${check.name}: Not found or failed execution.`);
      if (res.error) console.error(`       Detail: ${res.error.message}`);
      hasError = true;
    } else {
      const firstLine = res.stdout.split('\n')[0].trim();
      console.log(`[PASS] ${check.name}: ${firstLine}`);
    }
  } catch (err) {
    console.error(`[FAIL] ${check.name}: ${(err as Error).message}`);
    hasError = true;
  }
}

if (hasError) {
  console.error('\nEnvironment check failed.');
  console.error('Make sure Node.js and FFmpeg (bin folder with ffmpeg.exe, ffprobe.exe) are in your system PATH.');
  process.exit(1);
} else {
  console.log('\nAll environment checks passed! Ready for AI Agent Media Engine tasks.');
}
