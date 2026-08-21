const TODO_PREFIX = "TODO_";

export function isConfigured(value?: string): value is string {
  return Boolean(value && value.trim() && !value.trim().startsWith(TODO_PREFIX));
}

export function optionalUrl(value?: string): string | undefined {
  return isConfigured(value) ? value : undefined;
}

export function mailto(email?: string): string | undefined {
  return isConfigured(email) ? `mailto:${email}` : undefined;
}

export function withBasePath(path?: string): string | undefined {
  if (!isConfigured(path)) return undefined;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  
  const base = import.meta.env.BASE_URL || "/";
  // Avoid duplicate slashes
  return `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}
