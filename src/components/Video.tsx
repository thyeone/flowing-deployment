'use client';

import { ComponentProps } from 'react';

export default function Video(props: ComponentProps<'video'>) {
  return <video preload="auto" autoPlay={true} muted={true} loop playsInline {...props} />;
}
