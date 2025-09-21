import type { Request, Response } from 'express';

import { authenticate, registerUser } from '../services/authService.js';

export const login = async (req: Request, res: Response, next: (error: unknown) => void) => {
  try {
    const credentials = req.body;
    const result = await authenticate(credentials);

    res.status(200).json({
      message: 'Logged in successfully',
      data: result
    });
  } catch (error) {
    next(error);
  }
};

export const signup = async (req: Request, res: Response, next: (error: unknown) => void) => {
  try {
    const payload = req.body;
    const result = await registerUser(payload);

    res.status(201).json({
      message: 'Account created',
      data: result
    });
  } catch (error) {
    next(error);
  }
};
