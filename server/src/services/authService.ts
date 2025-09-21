export type Credentials = {
  email: string;
  password: string;
};

export type Registration = Credentials & {
  name: string;
};

export const authenticate = async (_credentials: Credentials) => {
  // TODO: Replace with real authentication logic.
  return {
    token: 'replace-with-jwt',
    expiresIn: 3600
  };
};

export const registerUser = async (payload: Registration) => {
  // TODO: Replace with persistence layer.
  return {
    id: 'user_1',
    name: payload.name,
    email: payload.email
  };
};
