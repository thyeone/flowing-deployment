export default function Region(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="text-gray-700 dark:text-gray-300"
      {...props}
    >
      <circle cx="8" cy="8" r="2" fill="currentColor" />
      <circle cx="8" cy="8" r="5.5" stroke="currentColor" />
      <path d="M8 3V0" stroke="currentColor" />
      <path d="M8 16V13" stroke="currentColor" />
      <path d="M13 8L16 8" stroke="currentColor" />
      <path d="M-1.19209e-07 8L3 8" stroke="currentColor" />
    </svg>
  );
}
