import { config } from 'dotenv';
import path from 'node:path';

const envFile = process.env.NODE_ENV === 'test' ? '.env.test' : '.env';
const envPath = path.resolve(process.cwd(), envFile);

config({ path: envPath, override: true });

const env = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: Number.parseInt(process.env.PORT ?? '2000', 10),
  clientUrl: process.env.CLIENT_URL ?? 'http://localhost:5173'
};

env.port = Number.isNaN(env.port) ? 2000 : env.port;

export default env;
