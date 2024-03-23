//todo: 이미지 최적화

type ProfileImageProps = {
  image: string;
};

export default function ProfileImage({ image }: ProfileImageProps) {
  return <img src={image} className="h-10 w-10 rounded-full" />;
}
