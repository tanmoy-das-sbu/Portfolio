"use client"

import { Suspense, lazy } from 'react';

const LazySocials = lazy(() => import('./../../src/components/social/page.jsx'));

const SocialsLazy = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazySocials />
    </Suspense>
  );
};

export default SocialsLazy; 