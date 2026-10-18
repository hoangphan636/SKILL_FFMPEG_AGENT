import { spawn } from 'node:child_process';
import { assertInputExists } from './validator.js';

export interface StreamInfo {
  index: number;
  codec_name?: string;
  codec_type?: string;
  width?: number;
  height?: number;
  bit_rate?: string;
  duration?: string;
}

export interface MediaProbeResult {
  format: {
    filename: string;
    nb_streams: number;
    format_name: string;
    duration?: string;
    size?: string;
    bit_rate?: string;
  };
  streams: StreamInfo[];
}

export async function probeMedia(filePath: string): Promise<MediaProbeResult> {
  assertInputExists(filePath);

  const args = [
    '-v', 'error',
    '-show_entries', 'format=filename,nb_streams,format_name,duration,size,bit_rate:stream=index,codec_name,codec_type,width,height,bit_rate,duration',
    '-of', 'json',
    filePath,
  ];

  return new Promise((resolve, reject) => {
    const child = spawn('ffprobe', args, { windowsHide: true });
    let stdout = '';
    let stderr = '';

    child.stdout.on('data', (data) => {
      stdout += data.toString();
    });

    child.stderr.on('data', (data) => {
      stderr += data.toString();
    });

    child.on('error', (err) => {
      reject(new Error(`Failed to invoke ffprobe. Ensure ffprobe is installed in PATH. Detail: ${err.message}`));
    });

    child.on('close', (code) => {
      if (code !== 0) {
        return reject(new Error(`ffprobe failed with exit code ${code}: ${stderr.trim()}`));
      }
      try {
        const parsed = JSON.parse(stdout) as MediaProbeResult;
        resolve(parsed);
      } catch (e) {
        reject(new Error(`Failed to parse ffprobe JSON output: ${(e as Error).message}\nRaw: ${stdout}`));
      }
    });
  });
}
