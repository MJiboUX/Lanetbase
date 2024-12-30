import { doc, getDoc, setDoc } from 'firebase/firestore';
import { User } from 'firebase/auth';
import { db } from '../firebase';
import { UserRole } from './types';

export const getUserRole = async (user: User | null): Promise<UserRole> => {
  if (!user) return 'user';

  try {
    const docRef = doc(db, 'users', user.uid);
    const docSnap = await getDoc(docRef);
    
    if (!docSnap.exists()) {
      return 'user';
    }
    
    return docSnap.data().role as UserRole;
  } catch (error) {
    console.error('Error fetching user role:', error);
    return 'user';
  }
};

export const setUserRole = async (userId: string, role: UserRole): Promise<void> => {
  const docRef = doc(db, 'users', userId);
  await setDoc(docRef, { role }, { merge: true });
};

// Set super admin role for specific email
export const initializeSuperAdmin = async (user: User) => {
  if (user.email === 'mubarrakmohammadjibo@gmail.com') {
    await setUserRole(user.uid, 'super_admin');
  }
};