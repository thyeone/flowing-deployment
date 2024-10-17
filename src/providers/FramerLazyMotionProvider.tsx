'use client';

import { LazyMotion, domMax } from 'framer-motion';
import { type PropsWithChildren } from 'react';

const FramerLazyMotionProvider = ({ children }: PropsWithChildren) => {
  return <LazyMotion features={domMax}>{children}</LazyMotion>;
};

export default FramerLazyMotionProvider;
