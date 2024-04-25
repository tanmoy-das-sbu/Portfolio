"use client"

import { Suspense, lazy, memo } from 'react';

const LazySocials = lazy(() => import('./../../src/components/social/page.jsx'));

const SocialsLazy = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazySocials />
    </Suspense>
  );
};

export default memo(SocialsLazy); 