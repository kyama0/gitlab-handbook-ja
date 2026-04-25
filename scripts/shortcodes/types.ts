export interface ShortcodeContext {
  upstreamDir: string;
  filePath: string;
}

export type ShortcodeHandler = (
  args: string,
  ctx: ShortcodeContext
) => string | Promise<string>;

export interface ParsedArgs {
  positional: string[];
  named: Record<string, string>;
}

export function parseArgs(raw: string): ParsedArgs {
  const positional: string[] = [];
  const named: Record<string, string> = {};
  const re = /(?:(\w+)=)?"([^"]*)"|(?:(\w+)=)?([^\s"]+)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(raw)) !== null) {
    const quotedKey = m[1];
    const quotedVal = m[2];
    const bareKey = m[3];
    const bareVal = m[4];
    const key = quotedKey ?? bareKey;
    const val = quotedVal ?? bareVal ?? '';
    if (key !== undefined) named[key] = val;
    else if (val) positional.push(val);
  }
  return { positional, named };
}
