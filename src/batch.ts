import fs from 'node:fs';
import { BatchManifestSchema, type TaskConfig } from './types.js';
import { MediaEngine } from './executor.js';
import { EffectEngine } from './effects/engine.js';

export interface BatchTaskResult {
  index: number;
  type: string;
  input: string;
  output: string;
  success: boolean;
  durationMs?: number;
  error?: string;
}

export interface BatchSummary {
  total: number;
  succeeded: number;
  failed: number;
  results: BatchTaskResult[];
}

export async function executeTask(task: TaskConfig): Promise<void> {
  switch (task.type) {
    case 'convert':
      await MediaEngine.convert(task.input, task.output, {
        crf: task.crf,
        preset: task.preset,
      });
      break;
    case 'trim':
      await MediaEngine.trim(task.input, task.output, {
        start: task.start,
        duration: task.duration,
        to: task.to,
      });
      break;
    case 'extract-audio':
      await MediaEngine.extractAudio(task.input, task.output, {
        bitrate: task.bitrate,
      });
      break;
    case 'thumbnail':
      await MediaEngine.thumbnail(task.input, task.output, {
        at: task.at,
      });
      break;
    case 'mux-subs':
      await MediaEngine.muxSubs(task.input, task.output, {
        subtitles: task.subtitles,
      });
      break;
    case 'effect':
      await EffectEngine.applyEffect(task.effectId, task.input, task.output);
      break;
    default: {
      const exhaustiveCheck: never = task;
      throw new Error(`Unsupported task type: ${JSON.stringify(exhaustiveCheck)}`);
    }
  }
}

export async function runBatchManifest(manifestPath: string): Promise<BatchSummary> {
  if (!fs.existsSync(manifestPath)) {
    throw new Error(`Batch manifest not found: ${manifestPath}`);
  }

  const raw = fs.readFileSync(manifestPath, 'utf-8');
  const parsed = JSON.parse(raw);
  const validated = BatchManifestSchema.parse(parsed);

  const results: BatchTaskResult[] = [];

  for (let i = 0; i < validated.tasks.length; i++) {
    const task = validated.tasks[i];
    const taskStart = Date.now();
    console.log(`[Batch] Running task ${i + 1}/${validated.tasks.length}: ${task.type} -> ${task.output}`);

    try {
      await executeTask(task);
      results.push({
        index: i + 1,
        type: task.type,
        input: task.input,
        output: task.output,
        success: true,
        durationMs: Date.now() - taskStart,
      });
    } catch (err) {
      console.error(`[Batch] Task ${i + 1} failed: ${(err as Error).message}`);
      results.push({
        index: i + 1,
        type: task.type,
        input: task.input,
        output: task.output,
        success: false,
        durationMs: Date.now() - taskStart,
        error: (err as Error).message,
      });
    }
  }

  const succeeded = results.filter((r) => r.success).length;
  const failed = results.length - succeeded;

  return {
    total: results.length,
    succeeded,
    failed,
    results,
  };
}
