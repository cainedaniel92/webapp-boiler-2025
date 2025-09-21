type LogLevel = 'info' | 'warn' | 'error' | 'debug';

type LogPayload = {
  message: string;
  context?: Record<string, unknown>;
};

const format = (level: LogLevel, payload: LogPayload) => {
  const timestamp = new Date().toISOString();
  const base = `[${timestamp}] [${level.toUpperCase()}] ${payload.message}`;
  if (payload.context) {
    return `${base} ${JSON.stringify(payload.context)}`;
  }
  return base;
};

export const logger = {
  info: (message: string, context?: Record<string, unknown>) =>
    console.log(format('info', { message, context })),
  warn: (message: string, context?: Record<string, unknown>) =>
    console.warn(format('warn', { message, context })),
  error: (message: string, context?: Record<string, unknown>) =>
    console.error(format('error', { message, context })),
  debug: (message: string, context?: Record<string, unknown>) =>
    console.debug(format('debug', { message, context }))
};
