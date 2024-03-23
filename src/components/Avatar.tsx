//todo: 이미지 최적화

type AvatarProps = {
  image: string;
};

export default function Avatar({ image }: AvatarProps) {
  return <img src={image} className="h-10 w-10 rounded-full" />;
}
