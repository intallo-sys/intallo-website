// JSON logs. NEVER pass message bodies, emails, names, API keys or secrets.
export function log(level: "info" | "warn" | "error" | string, event: string, meta: Record<string, any> = {}): void {
  const line = JSON.stringify({ level, event, time: new Date().toISOString(), ...meta });
  if (level === "error") console.error(line);
  else console.log(line);
}
