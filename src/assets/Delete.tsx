export default function Delete(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
        fill="var(--primary-path)"
      />
      <path d="M10 10L14 14" stroke="#7F7F7F" strokeLinecap="square" />
      <path d="M14 10L10 14" stroke="#7F7F7F" strokeLinecap="square" />
    </svg>
  );
}
