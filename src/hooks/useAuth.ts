import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebase';
import { useAuthStore } from '../stores/authStore';

export const useAuth = () => {
  const { setUser, setLoading, setError } = useAuthStore();

  useEffect(() => {
    // Set loading true when starting auth check
    setLoading(true);

    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          setUser({
            uid: user.uid,
            email: user.email!,
            role: 'user', // Default role
            subscription: 'free', // Default subscription
            modules: [],
            displayName: user.displayName || undefined,
            photoURL: user.photoURL || undefined,
            createdAt: new Date(),
            updatedAt: new Date()
          });
        } else {
          setUser(null);
        }
        // Always set loading to false after auth state is determined
        setLoading(false);
      },
      (error) => {
        console.error('Auth state change error:', error);
        setError(error.message);
        setLoading(false);
      }
    );

    // Cleanup subscription
    return () => {
      unsubscribe();
      setLoading(false);
    };
  }, [setUser, setLoading, setError]);

  return useAuthStore();
};