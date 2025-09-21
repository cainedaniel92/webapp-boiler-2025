import env from './config/env.js';
import { createApp } from './server.js';
import { logger } from './utils/logger.js';

const app = createApp();

const server = app.listen(env.port, () => {
  logger.info(`API server running on http://localhost:${env.port}`);
});

const shutdown = () => {
  logger.info('Shutting down API server');
  server.close(() => {
    logger.info('HTTP server closed');
    process.exit(0);
  });
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

export default server;
