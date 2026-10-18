import fs from 'node:fs';
import path from 'node:path';

export function assertInputExists(filePath: string): void {
  const resolved = path.resolve(filePath);
  if (!fs.existsSync(resolved)) {
    throw new Error(`[ValidationError] Input file does not exist: "${resolved}"`);
  }
  const stat = fs.statSync(resolved);
  if (!stat.isFile()) {
    throw new Error(`[ValidationError] Input path is not a file: "${resolved}"`);
  }
}

export function assertOutputNotExists(filePath: string): void {
  const resolved = path.resolve(filePath);
  if (fs.existsSync(resolved)) {
    throw new Error(
      `[SafetyViolation] Refusing to overwrite existing file: "${resolved}". Provide a distinct destination.`
    );
  }
  const dir = path.dirname(resolved);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

export function validateSafePath(userPath: string): string {
  if (!userPath || typeof userPath !== 'string') {
    throw new Error('[SafetyViolation] File path cannot be empty');
  }
  return path.resolve(userPath);
}
