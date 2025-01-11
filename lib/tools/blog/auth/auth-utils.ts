// /lib/tools/blog/auth/auth-utils.ts
// Authentication utility functions

import { auth, db } from './firebase-config';
import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from 'firebase/auth';

export const authUtils = {
  async login(email: string, password: string) {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result.user;
    } catch (error) {
      throw error;
    }
  },

  async register(email: string, password: string) {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      return result.user;
    } catch (error) {
      throw error;
    }
  },

  async logout() {
    try {
      await signOut(auth);
    } catch (error) {
      throw error;
    }
  }
};
