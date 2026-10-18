import { describe, it, expect } from 'vitest';
import { TimeStringSchema, TaskSchema, BatchManifestSchema } from '../src/types.js';

describe('TimeStringSchema Validation', () => {
  it('accepts valid HH:MM:SS timestamps', () => {
    expect(() => TimeStringSchema.parse('00:00:10')).not.toThrow();
    expect(() => TimeStringSchema.parse('01:23:45.678')).not.toThrow();
  });

  it('accepts valid MM:SS timestamps', () => {
    expect(() => TimeStringSchema.parse('05:30')).not.toThrow();
  });

  it('accepts raw seconds', () => {
    expect(() => TimeStringSchema.parse('45')).not.toThrow();
    expect(() => TimeStringSchema.parse('120.5')).not.toThrow();
  });

  it('rejects invalid time formats', () => {
    expect(() => TimeStringSchema.parse('abc')).toThrow();
    expect(() => TimeStringSchema.parse('12:34:56:78')).toThrow();
  });
});

describe('TaskSchema Validation', () => {
  it('validates convert task', () => {
    const task = {
      type: 'convert',
      input: 'samples/clip.mov',
      output: 'work/clip.mp4',
      crf: 23,
      preset: 'medium',
    };
    const parsed = TaskSchema.parse(task);
    expect(parsed.type).toBe('convert');
  });

  it('validates trim task with defaults', () => {
    const task = {
      type: 'trim',
      input: 'samples/clip.mp4',
      output: 'work/clip-trim.mp4',
      duration: '00:00:10',
    };
    const parsed = TaskSchema.parse(task);
    expect(parsed.type).toBe('trim');
    if (parsed.type === 'trim') {
      expect(parsed.start).toBe('00:00:00');
    }
  });

  it('validates extract-audio task', () => {
    const task = {
      type: 'extract-audio',
      input: 'samples/clip.mp4',
      output: 'work/clip.mp3',
      bitrate: '192k',
    };
    const parsed = TaskSchema.parse(task);
    expect(parsed.type).toBe('extract-audio');
  });

  it('validates batch manifest', () => {
    const manifest = {
      tasks: [
        {
          type: 'convert',
          input: 'samples/clip.mov',
          output: 'work/clip.mp4',
        },
        {
          type: 'thumbnail',
          input: 'samples/clip.mov',
          output: 'work/clip-thumb.jpg',
          at: '00:00:02',
        },
      ],
    };
    const parsed = BatchManifestSchema.parse(manifest);
    expect(parsed.tasks).toHaveLength(2);
  });
});
