export default function Plus(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="8" cy="8" r="8" fill="currentColor" />
      <path stroke="var(--primary-stroke)" d="M4 8H12" />
      <path stroke="var(--primary-stroke)" d="M8 4L8 12" />
    </svg>
  );
}
