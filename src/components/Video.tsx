'use client';

type VideoProps = React.VideoHTMLAttributes<HTMLVideoElement> & {
  src: string;
};

export default function Video({ src, ...rest }: VideoProps) {
  return <video src={src} {...rest} preload="auto" autoPlay muted loop playsInline />;
}
