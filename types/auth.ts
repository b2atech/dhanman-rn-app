import { ReactElement } from 'react';

// third-party

// ==============================|| AUTH TYPES ||============================== //

export type GuardProps = {
  children: ReactElement | null;
};

export type UserProfile = {
  id?: string;
  dhanmanId?: string;
  email?: string;
  avatar?: string;
  image?: string;
  name?: string;
  roles?: string[];
  tier?: string;
};

export interface AuthProps {
  isLoggedIn: boolean;
  isInitialized?: boolean;
  user?: UserProfile | null;
  token?: string | null;
}

export interface AuthActionProps {
  type: string;
  payload?: AuthProps;
}

export type AWSCognitoContextType = {
  isLoggedIn: boolean;
  isInitialized?: boolean;
  user?: UserProfile | null | undefined;
  logout: () => void;
  login: (email: string, password: string) => Promise<unknown>;
  register: (email: string, password: string, firstName: string, lastName: string) => Promise<unknown>;
  resetPassword: (verificationCode: string, newPassword: string) => Promise<any>;
  forgotPassword: (email: string) => Promise<void>;
  updateProfile: VoidFunction;
  codeVerification: (verificationCode: string) => Promise<any>;
  resendConfirmationCode: () => Promise<any>;
};

export interface InitialLoginContextProps {
  isLoggedIn: boolean;
  isInitialized?: boolean;
  user?: UserProfile | null | undefined;
}

export interface JWTDataProps {
  userId: string;
}

export type JWTContextType = {
  isLoggedIn: boolean;
  isInitialized?: boolean;
  user?: UserProfile | null | undefined;
  logout: () => void;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, firstName: string, lastName: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateProfile: VoidFunction;
};

export type Auth0ContextType = {
  isLoggedIn: boolean;
  isInitialized?: boolean;
  user?: UserProfile | null | undefined;
  logout: () => void;
  login: () => void;
  resetPassword: (email: string) => Promise<void>;
  updateProfile: VoidFunction;
};
