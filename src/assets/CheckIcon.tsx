export default function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="14" height="14" rx="7" fill="var(--primary-fill)" />
      <path d="M4 6.77778L6.14286 9L10 5" stroke="var(--secondary-stroke)" strokeLinejoin="round" />
    </svg>
  );
}
