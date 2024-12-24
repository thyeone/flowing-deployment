export function SquareUnCheckedBox(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="2.75"
        y="2.75"
        width="18.5"
        height="18.5"
        rx="3.25"
        stroke="#E0E0E3"
        strokeWidth="1.5"
      />
      <path
        d="M9 11.6L11.4 14L15 10"
        stroke="#E0E0E3"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SquareCheckedBox(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#EE5599" />
      <path
        d="M9 11.6L11.4 14L15 10"
        stroke="#E0E0E3"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <path d="M9 11.6L11.4 14L15 10" stroke="white" strokeLinejoin="round" />
    </svg>
  );
}
