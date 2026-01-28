'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Check localStorage directly instead of Zustand
    const authData = localStorage.getItem('auth-storage');
    
    if (authData) {
      const { state } = JSON.parse(authData);
      if (state?.isAuthenticated) {
        router.push('/customizer');
        return;
      }
    }
    
    router.push('/login');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Loading...</p>
    </div>
  );
}