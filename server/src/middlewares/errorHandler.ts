import type { ErrorRequestHandler, RequestHandler } from 'express';

import { logger } from '../utils/logger.js';

export const notFound: RequestHandler = (req, res) => {
  res.status(404).json({
    message: `Route ${req.originalUrl} not found`
  });
};

export const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  logger.error('Unhandled error', { message: error.message, stack: error.stack });

  const statusCode = 'status' in error && typeof error.status === 'number' ? error.status : 500;

  res.status(statusCode).json({
    message: error.message ?? 'Internal server error'
  });
};
