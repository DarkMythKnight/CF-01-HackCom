'use client'

import { useEffect } from 'react';

const SocialIntentsScript = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.socialintents.com/api/socialintents.1.3.js#2c9fa6c38b2ffdff018b307f0819002c';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default SocialIntentsScript;