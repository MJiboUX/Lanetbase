export type UserRole = 'admin' | 'user' | 'vendor';

export type SubscriptionTier = 'free' | 'basic' | 'premium' | 'enterprise';

export interface User {
  uid: string;
  email: string;
  role: UserRole;
  subscription: SubscriptionTier;
  modules: string[];
  displayName?: string;
  photoURL?: string;
  createdAt: Date;
  updatedAt: Date;
}